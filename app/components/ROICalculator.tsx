'use client';

import { useState, useEffect, KeyboardEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ROICalculator() {
  const [agents, setAgents] = useState(100);
  const [monthlyCalls, setMonthlyCalls] = useState(10000);
  const [avgCallDuration, setAvgCallDuration] = useState(5);
  const [monthlyAgentCost, setMonthlyAgentCost] = useState(0);
  const [aiCost, setAiCost] = useState(0);
  const [savings, setSavings] = useState(0);
  const [roi, setRoi] = useState(0);

  const COST_PER_AGENT = 700;
  const AI_COST_PER_MINUTE = 0.12;
  const AI_HANDLING_RATE = 0.8;
  const WORKING_DAYS = 22;
  const HOURS_PER_SHIFT = 8;
  const MINUTES_PER_SHIFT = HOURS_PER_SHIFT * 60;

  // Improved input state to avoid focus loss
  const [agentInput, setAgentInput] = useState('100');
  const [callsInput, setCallsInput] = useState('10000');
  const [durationInput, setDurationInput] = useState('5');

  // Sync number state with string state
  useEffect(() => { setAgentInput(String(agents)); }, [agents]);
  useEffect(() => { setCallsInput(String(monthlyCalls)); }, [monthlyCalls]);
  useEffect(() => { setDurationInput(String(avgCallDuration)); }, [avgCallDuration]);

  useEffect(() => {
    // Calculate monthly agent cost
    const agentCost = agents * COST_PER_AGENT;
    setMonthlyAgentCost(agentCost);

    // Calculate total available agent minutes per month
    const totalAgentMinutes = agents * MINUTES_PER_SHIFT * WORKING_DAYS;

    // Calculate AI costs and savings
    const totalCallMinutes = monthlyCalls * avgCallDuration;
    const aiHandledMinutes = totalCallMinutes * AI_HANDLING_RATE;
    const aiMonthlyCost = aiHandledMinutes * AI_COST_PER_MINUTE;
    setAiCost(aiMonthlyCost);

    // Calculate agent cost per minute
    const agentCostPerMinute = agentCost / totalAgentMinutes;
    
    // Calculate potential savings
    // Ensure savings is never negative for reasonable input
    let potentialSavings = (aiHandledMinutes * agentCostPerMinute) - aiMonthlyCost;
    if (potentialSavings < 0) potentialSavings = 0;
    setSavings(potentialSavings);
    setRoi(aiMonthlyCost > 0 ? (potentialSavings / aiMonthlyCost) * 100 : 0);
  }, [agents, monthlyCalls, avgCallDuration]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const InputControl = ({
    label,
    value,
    onDecrease,
    onIncrease,
    onChange,
    inputValue,
    setInputValue,
    step = 1,
    min = 1,
    max = 1000
  }: {
    label: string;
    value: number;
    onDecrease: () => void;
    onIncrease: () => void;
    onChange: (value: number) => void;
    inputValue: string;
    setInputValue: (v: string) => void;
    step?: number;
    min?: number;
    max?: number;
  }) => {
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (value < max) onIncrease();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (value > min) onDecrease();
      } else if (e.key === 'Enter') {
        e.preventDefault();
        e.currentTarget.blur();
      }
    };

    return (
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-300">
          {label}
        </label>
        <div className="flex items-center space-x-2">
          <button
            onClick={onDecrease}
            disabled={value <= min}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label={`Decrease ${label}`}
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          </button>
          <div className="relative flex-1">
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              value={inputValue}
              min={min}
              max={max}
              step={step}
              onKeyDown={handleKeyDown}
              onChange={e => {
                const val = e.target.value.replace(/[^0-9]/g, '');
                setInputValue(val);
                if (val === '') return;
                const num = parseInt(val, 10);
                if (!isNaN(num) && num >= min && num <= max) {
                  onChange(num);
                }
              }}
              onBlur={e => {
                let val = e.target.value.replace(/[^0-9]/g, '');
                if (val === '' || isNaN(Number(val)) || Number(val) < min) val = String(min);
                if (Number(val) > max) val = String(max);
                setInputValue(val);
                onChange(Number(val));
              }}
              className="w-full text-center bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label={label}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <span className="text-gray-400 text-sm">
                {label.includes('Duration') ? 'min' : ''}
              </span>
            </div>
          </div>
          <button
            onClick={onIncrease}
            disabled={value >= max}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label={`Increase ${label}`}
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Summary cards on the left */}
        <div className="space-y-6 order-2 md:order-1">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-medium text-gray-300 mb-2">Monthly Agent Cost</h3>
            <p className="text-3xl font-bold text-white">{formatCurrency(monthlyAgentCost)}</p>
            <p className="text-sm text-gray-400 mt-1">${COST_PER_AGENT} per agent</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-medium text-gray-300 mb-2">Monthly AI Cost</h3>
            <p className="text-3xl font-bold text-white">{formatCurrency(aiCost)}</p>
            <p className="text-sm text-gray-400 mt-1">${AI_COST_PER_MINUTE} per minute</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl p-6 border border-indigo-500/20">
            <h3 className="text-lg font-medium text-white mb-2">Potential Monthly Savings</h3>
            <p className="text-3xl font-bold text-white">{formatCurrency(savings)}</p>
            <p className="text-sm text-gray-300 mt-1">ROI: {roi.toFixed(1)}%</p>
          </motion.div>
        </div>
        {/* Config panel on the right */}
        <div className="space-y-6 order-1 md:order-2">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-medium text-white mb-4">Configure Your Call Center</h3>
            <div className="space-y-6">
              <InputControl
                label="Number of Agents"
                value={agents}
                onDecrease={() => setAgents(Math.max(1, agents - 1))}
                onIncrease={() => setAgents(Math.min(1000, agents + 1))}
                onChange={v => setAgents(v)}
                inputValue={agentInput}
                setInputValue={setAgentInput}
                min={1}
                max={1000}
              />
              <InputControl
                label="Monthly Calls"
                value={monthlyCalls}
                onDecrease={() => setMonthlyCalls(Math.max(10000, monthlyCalls - 100))}
                onIncrease={() => setMonthlyCalls(Math.min(1000000, monthlyCalls + 100))}
                onChange={v => setMonthlyCalls(v)}
                inputValue={callsInput}
                setInputValue={setCallsInput}
                min={10000}
                max={1000000}
              />
              <InputControl
                label="Average Call Duration"
                value={avgCallDuration}
                onDecrease={() => setAvgCallDuration(Math.max(1, avgCallDuration - 1))}
                onIncrease={() => setAvgCallDuration(Math.min(60, avgCallDuration + 1))}
                onChange={v => setAvgCallDuration(v)}
                inputValue={durationInput}
                setInputValue={setDurationInput}
                min={1}
                max={60}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
        <h3 className="text-lg font-medium text-white mb-4">Monthly Call Volume Analysis</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-white">{monthlyCalls}</p>
            <p className="text-sm text-gray-400">Total Calls</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-white">{monthlyCalls * avgCallDuration}</p>
            <p className="text-sm text-gray-400">Total Minutes</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-white">{formatCurrency(monthlyAgentCost / (monthlyCalls))}</p>
            <p className="text-sm text-gray-400">Cost per Call (Current)</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-white">{formatCurrency(aiCost / (monthlyCalls))}</p>
            <p className="text-sm text-gray-400">Cost per Call (AI)</p>
          </div>
        </div>
      </div>
    </div>
  );
} 