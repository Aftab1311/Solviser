import React from "react";
import RiskAssessment from "../components/RiskAssessment";
import AIPredictionCard from "../components/AIPredictionCard";
import DefaultsAndDisputes from "../components/DefaultsAndDisputes";
import RiskScoreWidget from "../components/RiskScoreWidget";
import ProgressBar from "../components/ProgressBar";
import PaymentDelays from "../components/PaymentDelays";
import DelayMetric from "../components/DelayMetric";
import ComplianceOverview from "../components/ComplianceOverview";
import FinancialFigures from "../components/FinancialFigures";
import CircularProgress from "../components/CircularProgress";
import DefaultRiskForecast from "../components/DefaultRiskForecast";
import ActionButtons from "../components/ActionButtons";
const AiRisk = () => {
    return (
        <div>
            <div className="w-full flex items-center  flex-col gap-8">
              <div className="w-full flex items-start px-2">
              <RiskAssessment />
              </div>
           
              <div className="w-full flex justify-between px-2 gap-4">
                     
                     <AIPredictionCard />
                     <DefaultsAndDisputes />
                     </div>
                  <div className="w-full flex justify-between px-2 gap-4">
                    
                    <RiskScoreWidget />
                    <PaymentDelays />
                   
                  </div>
                  <div className="w-full flex justify-between px-2 gap-4">
                    
                    <ComplianceOverview />
                    <FinancialFigures/>
                   
                  </div>
                  <div className="w-full flex justify-between px-2 gap-4">
                
                           <DefaultRiskForecast />
                           
                    </div>
                    <div className='w-full flex  px-2 gap-4  '>
                    <ActionButtons />
                      </div>
                </div>
            

    </div>
    )
};

export default AiRisk;