import React from 'react';
import { HeroSlide, KpiSlide, PillarsSlide, CanvasSlide, EconomicsSlide, ScaleKpiSlide } from './SlidesPart1';
import { MarketingSlide, PipelineSlide, FactorySlide, ForecastSlide, ChartSlide, JcurveSlide } from './SlidesPart2';
import { OrgchartSlide, GovernanceSlide, RiskmatrixSlide, ContingencySlide, FallbackSlide, ClosingSlide } from './SlidesPart3';

const map = {
  hero: HeroSlide, kpi: KpiSlide, pillars: PillarsSlide, canvas: CanvasSlide,
  economics: EconomicsSlide, scaleKpi: ScaleKpiSlide, marketing: MarketingSlide,
  pipeline: PipelineSlide, factory: FactorySlide, forecast: ForecastSlide,
  chart: ChartSlide, jcurve: JcurveSlide, orgchart: OrgchartSlide,
  governance: GovernanceSlide, riskmatrix: RiskmatrixSlide, contingency: ContingencySlide,
  fallback: FallbackSlide, closing: ClosingSlide
};

export default function SlideRenderer({ slide }) {
  const C = map[slide.type];
  return C ? <C s={slide} /> : <p>Unknown slide type: {slide.type}</p>;
}
