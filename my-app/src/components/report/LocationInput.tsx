"use client";
import { useEffect, useRef, useState } from "react";
import { AddressAutofill } from "@mapbox/search-js-react";
import { svg } from "framer-motion/client";

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
    const inputRef = useRef<HTMLInputElement | null>(null); // ✅ uncommented
    const [isGettingLocation, setIsGettingLocation] = useState(false);
    const [locationError, setLocationError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const getLocation = async () => {
        setLoading(true);
        setLocationError(null);

        try {
            if (!navigator.geolocation) {
                throw new Error("Geolocation not supported by this browser.");
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
                                            "Please allow location access in your browser settings"
                                        )
                                    );
                                    break;
                                case error.POSITION_UNAVAILABLE:
                                    reject(new Error("Location unavailable"));
                                    break;
                                case error.TIMEOUT:
                                    reject(new Error("Location request timed out"));
                                    break;
                                default:
                                    reject(new Error("An unknown error occurred")); 
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
            onChange(`${latitude.toFixed(6)} ${longitude.toFixed(6)}`); 
        } catch (error) {
            console.error("Location error:", error);
            setLocationError(
                error instanceof Error ? error.message : "Unable to get your location"
            ); 
        } finally {
            setIsGettingLocation(false);
            setLoading(false); 
        }
    };

    return (
        <div className="space-y-2">
            <label htmlFor="location" className="block text-sm text-zinc-400 mb-1">
                Incident Location
            </label>

            <div className="relative">
                <AddressAutofill
                accessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || ""}
                >
                    <input
                    type="text"
                    autoComplete="street-address"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="Enter location or use pin"
                    className="w-full rounded-xl bg-zinc-900/50 border border-zinc-800 pl-4 pr-12 py-3.5 text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
                    >
                    </input>
                </AddressAutofill>
                <button
                type="button"
                onClick={getLocation}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-sky-500/20 text-sky-400 hover:bg-sky-500/20 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isGettingLocation}
                title="Get current location"
                >
                    {isGettingLocation ? (
                        <svg
                            className="animte-spin h-5 w-5"
                            xmlns="http://w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                // className="h-5 w-5"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0  5.373 0 12h4zm2 5.291A7.962"

                            ></path>
                        </svg>
                    ): (
                        <svg
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        ><path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244"
                        /><path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        </svg>
                    )}
                </button>
            </div>
            

            {locationError && (
                <p className="text-sm text-red-500 mt-1">{locationError}</p>
            )}
        </div>
    );
}
