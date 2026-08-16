import React, { useState } from 'react';
import { Server, Shield, Cpu, Database, Activity, GitBranch, ArrowRight, CheckCircle2, Zap } from 'lucide-react';

interface NodeItem {
  id: string;
  title: string;
  category: string;
  status: 'active' | 'synced' | 'healthy';
  metrics: string;
  details: string;
  icon: React.ReactNode;
  x: number;
  y: number;
}

export const InfrastructureCanvas: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string>('alb');

  const nodes: NodeItem[] = [
    {
      id: 'igw',
      title: 'Internet Gateway',
      category: 'AWS Edge',
      status: 'active',
      metrics: '10 Gbps Bandwidth',
      details: 'Routes public ingress HTTP/HTTPS web traffic directly into the AWS VPC subnets.',
      icon: <GitBranch className="w-4 h-4 text-orange-600" />,
      x: 10,
      y: 50
    },
    {
      id: 'alb',
      title: 'Application Load Balancer',
      category: 'AWS Networking',
      status: 'healthy',
      metrics: '4.2k req/sec • 8ms latency',
      details: 'Terminates TLS/SSL certificates and distributes incoming web traffic across Multi-AZ targets.',
      icon: <Shield className="w-4 h-4 text-orange-600" />,
      x: 32,
      y: 50
    },
    {
      id: 'eks',
      title: 'Amazon EKS Compute Cluster',
      category: 'Kubernetes Nodes',
      status: 'synced',
      metrics: '8 Pods Running • 99.99% Uptime',
      details: 'Managed Kubernetes cluster running containerized microservices auto-scaled by Cluster Autoscaler.',
      icon: <Cpu className="w-4 h-4 text-amber-600" />,
      x: 58,
      y: 30
    },
    {
      id: 'rds',
      title: 'RDS Multi-AZ PostgreSQL',
      category: 'Database Cluster',
      status: 'healthy',
      metrics: '1.2ms Read Query • KMS Encrypted',
      details: 'Private multi-AZ primary database with automated continuous backups and standby failover.',
      icon: <Database className="w-4 h-4 text-amber-600" />,
      x: 58,
      y: 70
    },
    {
      id: 'prom',
      title: 'Prometheus & Grafana',
      category: 'Observability',
      status: 'active',
      metrics: 'Scrape Rate: 15s • 0 Firing Alerts',
      details: 'Telemetry collector gathering CPU, memory, network packets, and application error counters.',
      icon: <Activity className="w-4 h-4 text-orange-600" />,
      x: 85,
      y: 50
    }
  ];

  const selectedNodeData = nodes.find(n => n.id === activeNode) || nodes[1];

  return (
    <div className="w-full bg-[#09090b] text-stone-100 rounded-xl p-5 md:p-8 border border-stone-800 shadow-2xl relative overflow-hidden my-6">
      {/* Background dark grid */}
      <div className="absolute inset-0 bg-dark-grid opacity-30 pointer-events-none" />
      
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-stone-800 relative z-10">
        <div className="flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
          </span>
          <div>
            <h3 className="font-display font-bold text-sm tracking-wider uppercase text-stone-200 flex items-center gap-2">
              LIVE ARCHITECTURE TOPOLOGY
              <span className="bg-orange-950/80 text-orange-400 border border-orange-800/60 text-[10px] px-2 py-0.5 rounded font-mono">AWS • EKS • IAC</span>
            </h3>
            <p className="text-xs text-stone-400 font-mono mt-0.5">Interactive topology node inspector — click nodes to inspect details</p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono text-stone-400">
          <div className="flex items-center gap-1.5 bg-stone-900 px-3 py-1.5 rounded border border-stone-800">
            <Zap className="w-3.5 h-3.5 text-orange-400" />
            <span>State: <strong className="text-stone-200 font-normal">HEALTHY</strong></span>
          </div>
          <div className="flex items-center gap-1.5 bg-stone-900 px-3 py-1.5 rounded border border-stone-800 hidden sm:flex">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>IaC: <strong className="text-stone-200 font-normal">TERRAFORM SYNCED</strong></span>
          </div>
        </div>
      </div>

      {/* Visual Canvas */}
      <div className="relative my-8 min-h-[260px] flex items-center justify-center">
        {/* SVG Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Cable 1: IGW to ALB */}
          <path d="M 12 50 L 30 50" stroke="#44403c" strokeWidth="0.8" strokeDasharray="3 3" />
          {/* Animated pulse dot IGW to ALB */}
          <circle r="1" fill="#ea580c">
            <animateMotion path="M 12 50 L 30 50" dur="2s" repeatCount="indefinite" />
          </circle>

          {/* Cable 2: ALB to EKS */}
          <path d="M 34 50 Q 45 30 56 30" stroke="#ea580c" strokeWidth="1" />
          <circle r="1" fill="#f97316">
            <animateMotion path="M 34 50 Q 45 30 56 30" dur="2.5s" repeatCount="indefinite" />
          </circle>

          {/* Cable 3: ALB to RDS */}
          <path d="M 34 50 Q 45 70 56 70" stroke="#44403c" strokeWidth="0.8" strokeDasharray="3 3" />
          <circle r="1" fill="#fb923c">
            <animateMotion path="M 34 50 Q 45 70 56 70" dur="3s" repeatCount="indefinite" />
          </circle>

          {/* Cable 4: EKS to RDS */}
          <path d="M 58 36 L 58 64" stroke="#44403c" strokeWidth="0.8" />
          
          {/* Cable 5: EKS/RDS to Prometheus */}
          <path d="M 60 30 Q 72 30 83 50" stroke="#ea580c" strokeWidth="0.8" strokeDasharray="3 3" />
          <path d="M 60 70 Q 72 70 83 50" stroke="#44403c" strokeWidth="0.8" strokeDasharray="3 3" />
          <circle r="1" fill="#ea580c">
            <animateMotion path="M 60 30 Q 72 30 83 50" dur="1.8s" repeatCount="indefinite" />
          </circle>
        </svg>

        {/* Nodes Grid Layout */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 relative z-10">
          {nodes.map(node => {
            const isSelected = activeNode === node.id;
            return (
              <button
                key={node.id}
                onClick={() => setActiveNode(node.id)}
                className={`p-3.5 rounded-lg border text-left transition-all duration-200 flex flex-col justify-between group ${
                  isSelected 
                    ? 'bg-stone-900 border-orange-500 shadow-lg shadow-orange-950/40 ring-1 ring-orange-500/50 scale-[1.02]' 
                    : 'bg-stone-950/80 border-stone-800 hover:border-stone-700 hover:bg-stone-900/60'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 rounded ${isSelected ? 'bg-orange-500/20 text-orange-400' : 'bg-stone-900 text-stone-400 group-hover:text-stone-200'}`}>
                    {node.icon}
                  </div>
                  <span className={`text-[10px] font-mono uppercase px-1.5 py-0.5 rounded ${
                    node.status === 'healthy' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800/40' :
                    node.status === 'synced' ? 'bg-amber-950 text-amber-400 border border-amber-800/40' :
                    'bg-orange-950 text-orange-400 border border-orange-800/40'
                  }`}>
                    {node.status}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider block mb-0.5">{node.category}</span>
                  <h4 className="font-bold text-xs text-stone-100 group-hover:text-orange-400 transition-colors">{node.title}</h4>
                </div>

                <div className="mt-3 pt-2 border-t border-stone-800/60 flex items-center justify-between text-[11px] font-mono text-stone-400">
                  <span className="truncate">{node.metrics.split('•')[0]}</span>
                  <ArrowRight className={`w-3 h-3 transition-transform ${isSelected ? 'text-orange-400 translate-x-0.5' : 'text-stone-600'}`} />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Node Details Drawer */}
      <div className="bg-stone-950/90 border border-stone-800 rounded-lg p-4 font-mono text-xs text-stone-300 relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-orange-500/10 border border-orange-500/30 rounded text-orange-400 mt-0.5">
            <Server className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-orange-400 font-bold uppercase">{selectedNodeData.title}</span>
              <span className="text-stone-500">•</span>
              <span className="text-stone-400">{selectedNodeData.category}</span>
            </div>
            <p className="text-stone-300 font-sans mt-1 text-xs">{selectedNodeData.details}</p>
          </div>
        </div>

        <div className="bg-stone-900 border border-stone-800 px-3 py-2 rounded shrink-0">
          <span className="text-[10px] text-stone-400 block uppercase">Telemetry Status</span>
          <span className="text-emerald-400 font-bold flex items-center gap-1.5 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {selectedNodeData.metrics}
          </span>
        </div>
      </div>
    </div>
  );
};
