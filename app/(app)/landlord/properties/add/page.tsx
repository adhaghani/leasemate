"use client";

import { useState } from "react";

export default function AddPropertyPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const nextStep = () =>
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Add New Property</h1>
        <p className="text-muted-foreground">
          Add a new property to your portfolio
        </p>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-8">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
          <div key={step} className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step <= currentStep
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {step}
            </div>
            {step < totalSteps && (
              <div
                className={`h-1 w-24 mx-2 ${
                  step < currentStep ? "bg-blue-600" : "bg-gray-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="bg-white rounded-lg border shadow-sm">
        {currentStep === 1 && (
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Property Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Sunset Apartments"
                  defaultValue="Sunset Apartments"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Property Type
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select property type</option>
                  <option value="apartment" selected>
                    Apartment Complex
                  </option>
                  <option value="single-family">Single Family Home</option>
                  <option value="duplex">Duplex</option>
                  <option value="townhouse">Townhouse</option>
                  <option value="condo">Condominium</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">
                  Address
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Full address"
                  defaultValue="123 University Ave"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">City</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="City"
                  defaultValue="College Town"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">State</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select state</option>
                  <option value="CA" selected>
                    California
                  </option>
                  <option value="NY">New York</option>
                  <option value="TX">Texas</option>
                  <option value="FL">Florida</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  ZIP Code
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="ZIP Code"
                  defaultValue="90210"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Total Units
                </label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Number of units"
                  defaultValue="24"
                />
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Property Details</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Year Built
                </label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Year"
                  defaultValue="2018"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Square Footage
                </label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Total sq ft"
                  defaultValue="15000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Parking Spaces
                </label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Number of spaces"
                  defaultValue="30"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Laundry Facilities
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select option</option>
                  <option value="in-unit" selected>
                    In-Unit
                  </option>
                  <option value="shared">Shared Facility</option>
                  <option value="none">None</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">
                  Amenities
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    Swimming Pool
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    Fitness Center
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Pet Friendly
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    Air Conditioning
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Balcony/Patio
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    Security System
                  </label>
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">
                  Description
                </label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  placeholder="Property description"
                  defaultValue="Modern student housing complex near university campus with contemporary amenities and study spaces."
                />
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">
              Financial Information
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Purchase Price
                </label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Purchase price"
                  defaultValue="2500000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Current Market Value
                </label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Market value"
                  defaultValue="2800000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Monthly Property Tax
                </label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Monthly tax"
                  defaultValue="2100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Monthly Insurance
                </label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Monthly insurance"
                  defaultValue="850"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Monthly HOA Fees
                </label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="HOA fees (if applicable)"
                  defaultValue="0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Monthly Maintenance Budget
                </label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Maintenance budget"
                  defaultValue="1500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Notes</label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                  placeholder="Additional financial notes"
                  defaultValue="Excellent investment property in growing student area. Strong rental demand year-round."
                />
              </div>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Review & Submit</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Property Summary</h3>
                <div className="grid gap-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Name:</span>
                    <span>Sunset Apartments</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Type:</span>
                    <span>Apartment Complex</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Address:</span>
                    <span>123 University Ave, College Town, CA 90210</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Units:</span>
                    <span>24</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Year Built:</span>
                    <span>2018</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Purchase Price:
                    </span>
                    <span>$2,500,000</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 mb-2">Next Steps</h3>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Property will be added to your portfolio</li>
                  <li>• You can start adding units and setting rent prices</li>
                  <li>• Upload property documents and photos</li>
                  <li>• Set up tenant screening criteria</li>
                </ul>
              </div>

              <div className="flex items-center">
                <input type="checkbox" id="terms" className="mr-2" />
                <label
                  htmlFor="terms"
                  className="text-sm text-muted-foreground"
                >
                  I confirm that all information provided is accurate and I
                  agree to the terms of service
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="px-6 py-4 border-t flex justify-between">
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`px-6 py-2 rounded-lg ${
              currentStep === 1
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Previous
          </button>

          {currentStep < totalSteps ? (
            <button
              onClick={nextStep}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Next Step
            </button>
          ) : (
            <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
              Add Property
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
