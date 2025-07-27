"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface LocationInputProps {
    value: string;
    onChange: (value: string) => void;
    onCoordinatesChange?: (lat: number | null, lng: number | null) => void;
}

export function LocationInput({
    value,
    onChange,
    onCoordinatesChange,
}: LocationInputProps) {
    const [isGettingLocation, setIsGettingLocation] = useState(false);
    const [locationError, setLocationError] = useState<string | null>(null);
    const [suggestions, setSuggestions] = useState<any[]>([]);
    const [isSearching, setIsSearching] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    // This useEffect hook automatically triggers the location detection on component load
    useEffect(() => {
        // Only run if the input value is currently empty
        // This prevents overwriting an address from a form state or hardcoded value
        if (!value) {
            getLocation();
        }
    // The empty dependency array ensures this effect runs only once on mount
    }, []);

    // Function to handle reverse geocoding using Nominatim
    const reverseGeocode = async (latitude: number, longitude: number) => {
        const userAgent = "YourAppName/1.0 (contact@yourapp.com)";
        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`,
                {
                    headers: {
                        "User-Agent": userAgent,
                    },
                }
            );

            const data = await response.json();

            if (data.display_name) {
                return data.display_name;
            }
            return null;
        } catch (error) {
            console.error("Error during reverse geocoding:", error);
            return null;
        }
    };

    // Function to handle forward geocoding (search/autocomplete) using Nominatim
    const searchNominatim = useCallback(async (query: string) => {
        if (!query) {
            setSuggestions([]);
            return;
        }
        setIsSearching(true);
        const userAgent = "YourAppName/1.0 (contact@yourapp.com)";
        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=5&countrycodes=ng`,
                {
                    headers: {
                        "User-Agent": userAgent,
                    },
                }
            );
            const data = await response.json();
            setSuggestions(data);
        } catch (error) {
            console.error("Error during geocoding search:", error);
            setSuggestions([]);
        } finally {
            setIsSearching(false);
        }
    }, []);

    // Effect to trigger search on input value change (with a debounce for performance)
    useEffect(() => {
        const handler = setTimeout(() => {
            if (value) {
                searchNominatim(value);
            } else {
                setSuggestions([]);
            }
        }, 500); // Debounce delay
        return () => {
            clearTimeout(handler);
        };
    }, [value, searchNominatim]);

    const getLocation = async () => {
        setIsGettingLocation(true);
        setLocationError(null);
        onChange("");
        onCoordinatesChange?.(null, null);

        try {
            if (!navigator.geolocation) {
                throw new Error("Geolocation is not supported by your browser");
            }

            const position = await new Promise<GeolocationPosition>(
                (resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(
                        resolve,
                        (error) => {
                            switch (error.code) {
                                case error.PERMISSION_DENIED:
                                    reject(
                                        new Error(
                                            "Permission denied. Please allow location access in your browser settings."
                                        )
                                    );
                                    break;
                                case error.POSITION_UNAVAILABLE:
                                    reject(new Error("Location information is unavailable."));
                                    break;
                                case error.TIMEOUT:
                                    reject(new Error("Location request timed out."));
                                    break;
                                default:
                                    reject(new Error("An unknown error occurred while getting location."));
                            }
                        },
                        {
                            enableHighAccuracy: true,
                            timeout: 10000,
                            maximumAge: 0,
                        }
                    );
                }
            );

            const { latitude, longitude } = position.coords;
            onCoordinatesChange?.(latitude, longitude);

            const detectedAddress = await reverseGeocode(latitude, longitude);
            onChange(detectedAddress || `Lat: ${latitude.toFixed(6)}, Lng: ${longitude.toFixed(6)}`);
        } catch (error) {
            console.error("Location error:", error);
            setLocationError(
                error instanceof Error ? error.message : "Unable to get your location"
            );
        } finally {
            setIsGettingLocation(false);
        }
    };

    const handleSuggestionClick = (suggestion: any) => {
        const { lat, lon, display_name } = suggestion;
        onChange(display_name);
        onCoordinatesChange?.(parseFloat(lat), parseFloat(lon));
        setSuggestions([]);
    };

    return (
        <div className="space-y-2">
            <label className="block text-sm font-medium text-zinc-400">
                Location
            </label>
            <div className="relative">
                <input
                    ref={inputRef}
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="Enter location or click the pin to auto-detect"
                    className="w-full rounded-xl bg-zinc-900/50 border border-zinc-800 pl-4 pr-12 py-3.5
                    text-white transition-colors duration-200
                    focus:outline-none focus:ring-2 focus:ring-sky-500/40"
                />
                {suggestions.length > 0 && (
                    <ul className="absolute z-10 w-full bg-zinc-900/70 backdrop-blur-md border border-zinc-700 rounded-xl mt-1 max-h-60 overflow-y-auto">
                        {suggestions.map((suggestion, index) => (
                            <li
                                key={index}
                                onClick={() => handleSuggestionClick(suggestion)}
                                className="p-3 text-sm text-white cursor-pointer hover:bg-zinc-800 transition-colors duration-200"
                            >
                                {suggestion.display_name}
                            </li>
                        ))}
                    </ul>
                )}
                <button
                    type="button"
                    onClick={getLocation}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5
                    rounded-lg bg-sky-500/10 text-sky-400 
                    hover:bg-sky-500/20 transition-colors duration-200
                    disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isGettingLocation}
                    title="Get current location">
                    {isGettingLocation ? (
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    ) : (
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    )}
                </button>
            </div>
            {locationError && (
                <p className="text-sm text-red-400 flex items-center gap-2">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    {locationError}
                </p>
            )}
        </div>
    );
}