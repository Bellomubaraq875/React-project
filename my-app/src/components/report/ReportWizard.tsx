"use client";

import { useState } from "react";
import { ReportForm } from "./ReportForm";
import { ReportSubmitted } from "./ReportFormCompleted"; // Renamed to ReportSubmitted as per your file

export function ReportWizard() {
    const [currentStep, setCurrentStep] = useState(1);
    const [reportData, setReportData] = useState<any>(null);

    const handleStepComplete = async (data: any) => {
        
        setReportData((prevData: any) => ({ ...prevData, ...data }));
        setCurrentStep((prev) => prev + 1);
    };

    return (
        <div className="rounded-2xl bg-zinc-900 p-8">
            {currentStep === 1 && <ReportForm onComplete={handleStepComplete} />}
            
            {currentStep === 2 && reportData && (
                <ReportSubmitted data={reportData}/>
            )}
            
        </div>
    );
}