"use client";
import React from "react";

function ComplianceOverview() {
  return (
    <div className="p-6 bg-white rounded-lg h-auto shadow-[0px_2px_4px_rgba(0,0,0,0.1),0px_4px_6px_rgba(0,0,0,0.1)] w-[676px]">
      <div className="flex gap-2 items-center mb-11">
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<svg id="7:35472" layer-name="Frame" width="15" height="21" viewBox="0 0 15 21" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon" style="width: 15px; height: 20px"> <g clip-path="url(#clip0_7_35472)"> <path d="M7.5 0.5C5.86719 0.5 4.47656 1.54297 3.96484 3H2.5C1.12109 3 0 4.12109 0 5.5V18C0 19.3789 1.12109 20.5 2.5 20.5H12.5C13.8789 20.5 15 19.3789 15 18V5.5C15 4.12109 13.8789 3 12.5 3H11.0352C10.5234 1.54297 9.13281 0.5 7.5 0.5ZM7.5 3C7.83152 3 8.14946 3.1317 8.38388 3.36612C8.6183 3.60054 8.75 3.91848 8.75 4.25C8.75 4.58152 8.6183 4.89946 8.38388 5.13388C8.14946 5.3683 7.83152 5.5 7.5 5.5C7.16848 5.5 6.85054 5.3683 6.61612 5.13388C6.3817 4.89946 6.25 4.58152 6.25 4.25C6.25 3.91848 6.3817 3.60054 6.61612 3.36612C6.85054 3.1317 7.16848 3 7.5 3ZM11.9141 11.1641L6.91406 16.1641C6.54688 16.5312 5.95313 16.5312 5.58984 16.1641L3.08594 13.6641C2.71875 13.2969 2.71875 12.7031 3.08594 12.3398C3.45312 11.9766 4.04688 11.9727 4.41016 12.3398L6.24609 14.1758L10.5859 9.83594C10.9531 9.46875 11.5469 9.46875 11.9102 9.83594C12.2734 10.2031 12.2773 10.7969 11.9102 11.1602L11.9141 11.1641Z" fill="black"></path> </g> <defs> <clipPath id="clip0_7_35472"> <path d="M0 0.5H15V20.5H0V0.5Z" fill="white"></path> </clipPath> </defs> </svg>',
            }}
          />
        </div>
        <span className="text-xl font-bold text-neutral-800">
          Compliance Overview
        </span>
      </div>
      <div className="flex gap-6 mb-5">
        <div className="w-[302px]">
          <span className="mb-2.5 text-base font-medium text-gray-500">
            Contract Compliance Rate
          </span>
          <div className="flex gap-4 items-center">
            <div className="relative w-24 h-24">
              <div>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      '<svg id="7:35480" layer-name="Frame" width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" class="chart-svg" style="width: 96px; height: 96px"> <path d="M96 96H0V0H96V96Z" stroke="#E5E7EB"></path> <path d="M48.0038 5.55859C59.26 5.55859 70.0551 10.0301 78.0144 17.9894C85.9737 25.9487 90.4452 36.7438 90.4452 47.9999C90.4452 59.2561 85.9737 70.0512 78.0144 78.0105C70.0551 85.9698 59.26 90.4413 48.0038 90.4413C36.7477 90.4413 25.9526 85.9698 17.9933 78.0105C10.034 70.0512 5.5625 59.2561 5.5625 47.9999C5.5625 36.7438 10.034 25.9487 17.9933 17.9894C25.9526 10.0301 36.7477 5.55859 48.0038 5.55859Z" stroke="#EEEEEE" stroke-width="8"></path> <path d="M48.0038 5.55859C59.26 5.55859 70.0551 10.0301 78.0144 17.9894C85.9737 25.9487 90.4452 36.7438 90.4452 47.9999C90.4452 59.2561 85.9737 70.0512 78.0144 78.0105C70.0551 85.9698 59.26 90.4413 48.0038 90.4413C36.7477 90.4413 25.9526 85.9698 17.9933 78.0105C10.034 70.0512 5.5625 59.2561 5.5625 47.9999C5.5625 36.7438 10.034 25.9487 17.9933 17.9894C25.9526 10.0301 36.7477 5.55859 48.0038 5.55859Z" stroke="#4ADE80" stroke-width="8" stroke-dasharray="245.33 266.67"></path> </svg>',
                  }}
                />
              </div>
              <div className="absolute left-5 text-2xl font-bold text-gray-800 top-[33px]">
                92%
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex gap-2 items-center">
                <div className="w-3 h-3 bg-emerald-500 rounded-sm" />
                <span>Compliant: 92%</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-3 h-3 bg-red-500 rounded-sm" />
                <span>Non-compliant: 8%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[302px]">
          <span className="mb-2.5 text-base font-medium text-gray-500">
            Regulatory Compliance Score
          </span>
          <div className="flex gap-4 items-center">
            <div className="relative w-24 h-24">
              <div>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      '<svg id="7:35497" layer-name="Frame" width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" class="chart-svg" style="width: 96px; height: 96px"> <path d="M96 96H0V0H96V96Z" stroke="#E5E7EB"></path> <path d="M48.0038 5.55859C59.26 5.55859 70.0551 10.0301 78.0144 17.9894C85.9737 25.9487 90.4452 36.7438 90.4452 47.9999C90.4452 59.2561 85.9737 70.0512 78.0144 78.0105C70.0551 85.9698 59.26 90.4413 48.0038 90.4413C36.7477 90.4413 25.9526 85.9698 17.9933 78.0105C10.034 70.0512 5.5625 59.2561 5.5625 47.9999C5.5625 36.7438 10.034 25.9487 17.9933 17.9894C25.9526 10.0301 36.7477 5.55859 48.0038 5.55859Z" stroke="#EEEEEE" stroke-width="8"></path> <path d="M48.0038 5.55859C59.26 5.55859 70.0551 10.0301 78.0144 17.9894C85.9737 25.9487 90.4452 36.7438 90.4452 47.9999C90.4452 59.2561 85.9737 70.0512 78.0144 78.0105C70.0551 85.9698 59.26 90.4413 48.0038 90.4413C36.7477 90.4413 25.9526 85.9698 17.9933 78.0105C10.034 70.0512 5.5625 59.2561 5.5625 47.9999C5.5625 36.7438 10.034 25.9487 17.9933 17.9894C25.9526 10.0301 36.7477 5.55859 48.0038 5.55859Z" stroke="#F97316" stroke-width="8" stroke-dasharray="226.67 266.67"></path> </svg>',
                  }}
                />
              </div>
              <div className="absolute left-5 text-2xl font-bold text-gray-800 top-[33px]">
                85%
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex gap-2 items-center">
                <div className="w-3 h-3 bg-orange-500 rounded-sm" />
                <span>Compliant: 85%</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-3 h-3 bg-red-500 rounded-sm" />
                <span>Non-compliant: 15%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <span className="mb-3 text-base font-medium text-gray-500">
          Compliance Trends
        </span>
        <div className="flex gap-4 mb-5">
          <div className="flex flex-col gap-1 items-center">
            <div className="w-12 h-px bg-emerald-500 rounded-md" />
            <span>Jan</span>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <div className="w-12 h-px bg-emerald-500 rounded-md" />
            <span>Feb</span>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <div className="w-12 h-px bg-emerald-500 rounded-md" />
            <span>Mar</span>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <div className="w-12 h-px bg-blue-300 rounded-md" />
            <span>Apr</span>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <div className="w-12 h-px bg-blue-300 rounded-md" />
            <span>May</span>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <div className="w-12 h-px bg-blue-300 rounded-md" />
            <span>Jun</span>
          </div>
        </div>
        <div className="flex gap-4 justify-center">
          <div className="flex gap-1 items-center">
            <div className="w-3 h-3 bg-emerald-500 rounded-sm" />
            <span className="text-sm text-gray-800">Past 3 months</span>
          </div>
          <div className="flex gap-1 items-center">
            <div className="w-3 h-3 bg-blue-300 rounded-sm" />
            <span className="text-sm text-gray-800">
              Next 3 months (forecast)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComplianceOverview;
