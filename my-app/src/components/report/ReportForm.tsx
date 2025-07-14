// components/ReportForm.tsx
"use client";
import { useState, useEffect, useCallback } from "react";
import { LocationInput } from "./LocationInput"; // Assuming LocationInput is in the same directory

const REPORT_TYPES = [
    "Theft",
    "Fire Outbreak",
    "Medical Emergency",
    "Natural Disaster",
    "Road Accident",
    "Vandalism",
    "Pollution",
    "Infrastructure Damage",
    "Other",
] as const;

type ReportType = "EMERGENCY" | "NON_EMERGENCY";

interface ReportFormProps {
    onComplete: (data: any) => void;
}

export function ReportForm({ onComplete }: ReportFormProps) {
    const [formData, setFormData] = useState({
        incidentType: "" as ReportType,
        specificType: "",
        location: "", // Human-readable address
        description: "",
        title: "", // Consider adding an input for this
    });

    const [image, setImage] = useState<string | null>(null); // Base64 string for preview
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [coordinates, setCoordinates] = useState<{ // Raw lat/lon
        latitude: number | null;
        longitude: number | null;
    }>({
        latitude: null,
        longitude: null,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isLocating, setIsLocating] = useState(false);
    const [locationError, setLocationError] = useState<string | null>(null);

    // --- REAL REVERSE GEOCODING API CALL (Placeholder) ---
    const getAddressFromCoordinates = useCallback(async (lat: number, lon: number): Promise<string> => {
        setIsLocating(true);
        setLocationError(null);
        try {
            // Replace with your actual backend endpoint for reverse geocoding
            // Your backend will then call Google Maps Geocoding API, Nominatim, etc.
            const response = await fetch('/api/reverse-geocode', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ latitude: lat, longitude: lon }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to get address from coordinates');
            }

            const data = await response.json();
            // Assuming your backend returns an object like { address: "..." }
            return data.address || `Lat: ${lat.toFixed(4)}, Lon: ${lon.toFixed(4)}`;

        } catch (error: any) {
            console.error("Error reverse geocoding:", error);
            setLocationError(`Could not determine address: ${error.message}`);
            return `Lat: ${lat.toFixed(4)}, Lon: ${lon.toFixed(4)}`; // Fallback to coordinates
        } finally {
            setIsLocating(false);
        }
    }, []);

    // --- Location Autodetection on Component Mount ---
    useEffect(() => {
        setIsLocating(true);
        setLocationError(null);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    setCoordinates({ latitude, longitude });
                    // Call the real backend API for reverse geocoding
                    const detectedAddress = await getAddressFromCoordinates(latitude, longitude);
                    setFormData((prev) => ({ ...prev, location: detectedAddress }));
                    // setIsLocating will be set to false by getAddressFromCoordinates's finally block
                },
                (error) => {
                    console.error("Geolocation error:", error);
                    let errorMessage = "Unable to retrieve your location.";
                    if (error.code === error.PERMISSION_DENIED) {
                        errorMessage = "Location permission denied. Please enable it in your browser settings.";
                    } else if (error.code === error.POSITION_UNAVAILABLE) {
                        errorMessage = "Location information is unavailable.";
                    } else if (error.code === error.TIMEOUT) {
                        errorMessage = "The request to get user location timed out.";
                    }
                    setLocationError(errorMessage);
                    setIsLocating(false);
                },
                { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 } // Options for geolocation
            );
        } else {
            setLocationError("Geolocation is not supported by your browser.");
            setIsLocating(false);
        }
    }, [getAddressFromCoordinates]); // Dependency on the memoized getAddressFromCoordinates

    const handleSelectType = (type: ReportType) => {
        setFormData((prev) => ({ ...prev, incidentType: type }));
    };

    // --- REAL IMAGE ANALYSIS API CALL (Placeholder) ---
    const analyzeImageForSuggestions = useCallback(async (imageData: string) => {
        setIsAnalyzing(true);
        try {
            // Replace with your actual backend endpoint for image analysis
            // Your backend will then call Google Cloud Vision, GPT-4o, etc.
            const response = await fetch('/api/analyze-image', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ imageData: imageData }), // Send Base64 image data
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to analyze image');
            }

            const data = await response.json();
            // Assuming your backend returns an object like { suggestedType: "...", description: "..." }
            const suggestedType = data.suggestedType as typeof REPORT_TYPES[number] || "Other"; // Fallback
            const suggestedDescription = data.description || "No specific details suggested by AI. Please provide more.";

            setFormData((prev) => ({
                ...prev,
                specificType: suggestedType,
                description: suggestedDescription,
            }));

        } catch (error: any) {
            console.error("Error during image analysis:", error);
            // Inform user about the error, maybe clear suggestions
            // setFormData((prev) => ({ ...prev, specificType: "", description: "Failed to auto-suggest based on image." }));
        } finally {
            setIsAnalyzing(false);
        }
    }, []);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            const result = reader.result as string;
            setImage(result);
            // Trigger actual image analysis when image is uploaded
            analyzeImageForSuggestions(result);
        };
        reader.readAsDataURL(file);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Send all collected data to your backend for final processing
        onComplete({ ...formData, rawImageBase64: image, coordinates });
        // After successful submission, you might reset the form or navigate
        // setIsSubmitting(false);
    };

    return (
        <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
                {/* Emergency */}
                <button
                    type="button"
                    onClick={() => handleSelectType("EMERGENCY")}
                    className={`p-6 rounded-2xl border-2 transition-all duration-200 ${formData.incidentType === "EMERGENCY"
                        ? "bg-red-500/20 border-red-500 shadow-lg shadow-red-500/20"
                        : "bg-zinc-900/50 border-zinc-800 hover:bg-red-500/10 hover:border-red-500/50"
                        }`}>
                    <div className="flex flex-col items-center space-y-2">
                        <svg
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 9v2m0 4h.01M6.938 20h10.124c1.054 0 1.667-1.167 1.118-2.105L13.118 5.894c-.528-.928-1.708-.928-2.236 0L5.82 17.895A1.25 1.25 0 006.938 20z"
                            />
                        </svg>
                        <span className="font-medium text-red-500">Emergency</span>
                        <span className="text-xs text-zinc-400">
                            Immediate Response Required
                        </span>
                    </div>
                </button>

                {/* Non-Emergency */}
                <button
                    type="button"
                    onClick={() => handleSelectType("NON_EMERGENCY")}
                    className={`p-6 rounded-2xl border-2 transition-all duration-200 ${formData.incidentType === "NON_EMERGENCY"
                        ? "bg-green-500/20 border-green-500 shadow-lg shadow-green-500/20"
                        : "bg-zinc-900/50 border-zinc-800 hover:bg-green-500/10 hover:border-green-500/50"
                        }`}>
                    <div className="flex flex-col items-center space-y-2">
                        <svg
                            className="h-8 w-8 text-orange-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                        <span className="font-medium text-green-500">Non-Emergency</span>
                        <span className="text-xs text-zinc-400">Can Wait</span>
                    </div>
                </button>
            </div>

            {/* Image Upload */}
            <div className="relative group">
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    id="image-upload"
                    className="hidden"
                />
                <label
                    htmlFor="image-upload"
                    className="block w-full cursor-pointer rounded-xl border-2 border-zinc-800 p-8 text-center hover:border-sky-500 hover:bg-zinc-800 transition space-y-2">
                    {image ? (
                        <img
                            src={image}
                            alt="Uploaded"
                            className="mx-auto h-32 rounded-lg object-contain"
                        />
                    ) : (
                        <div className="flex flex-col items-center justify-center space-y-2 text-zinc-400">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 text-sky-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 15a4 4 0 004 4h10a4 4 0 004-4M12 3v8m0 0l-3-3m3 3l3-3"
                                />
                            </svg>
                            <span>Click to upload an image</span>
                        </div>
                    )}
                </label>
                {isAnalyzing && (
                    <div className="absolute inset-0 bg-black/50 rounded-2xl flex items-center justify-center">
                        <div className="flex flex-col items-center space-y-3">
                            <svg
                                className="animate-spin h-8 w-8 text-sky-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span className="text-white text-sm">Analyzing image...</span>
                        </div>
                    </div>
                )}
            </div>

            {/* Specific Report Type */}
            <div className="">
                <label htmlFor="specificType" className="block text-sm font-medium text-zinc-400 mb-2">
                    Specific Incident Type
                </label>
                <select
                    id="specificType"
                    value={formData.specificType}
                    onChange={(e) =>
                        setFormData((prev) => ({ ...prev, specificType: e.target.value }))
                    }
                    className="w-full rounded-xl bg-zinc-900/50 border border-zinc-800 px-4 py-3.5 text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
                    required>
                    <option value=""> Select type </option>
                    {REPORT_TYPES.map((type, i) => (
                        <option key={i} value={type}>
                            {type}
                        </option>
                    ))}
                </select>
            </div>

            {/* Description */}
            <div>
                <label
                    htmlFor="description"
                    className="block mb-2 text-sm text-zinc-400">
                    Detailed Description of the Incident
                </label>
                <textarea
                    id="description"
                    rows={4}
                    required
                    className="w-full rounded-xl bg-zinc-800 text-white p-4 border border-zinc-700 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 resize-none"
                    placeholder="Provide a detailed description of what happened..."
                    value={formData.description}
                    onChange={(e) =>
                        setFormData((prev) => ({ ...prev, description: e.target.value }))
                    }>
                </textarea>
            </div>

            {/* Location Input (Now integrated with real geocoding calls via backend) */}
            <LocationInput
                value={formData.location}
                onChange={(loc) => {
                    setFormData((prev) => ({ ...prev, location: loc }));
                    setCoordinates({ latitude: null, longitude: null }); // Clear auto-detected coords if user types
                }}
                isLocating={isLocating}
                locationError={locationError}
            />
            {coordinates.latitude !== null && coordinates.longitude !== null && (
                <p className="mt-2 text-sm text-zinc-500">
                    Automatically detected: {coordinates.latitude.toFixed(4)}, {coordinates.longitude.toFixed(4)}
                </p>
            )}


            {/* Submit */}
            <button
                type="submit"
                className="w-full py-3 px-6 rounded-xl bg-sky-600 text-white hover:bg-sky-700 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting || isAnalyzing || isLocating}>
                {isSubmitting ? "Submitting..." :
                 isAnalyzing ? "Analyzing Image..." :
                 isLocating ? "Detecting Location..." :
                 "Continue"}
            </button>
        </form>
    );
}