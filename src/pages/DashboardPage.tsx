import { DashboardLayout } from '../layouts/DashboardLayout';
import { DashboardMetrics } from '../components/DashboardMetrics';
import { DashboardCharts } from '../components/DashboardCharts';
import { DashboardBottom } from '../components/DashboardBottom';
import { DashboardPremiumBanner } from '../components/DashboardPremiumBanner';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <DashboardMetrics />
      <DashboardCharts />
      <DashboardBottom />
      <DashboardPremiumBanner />
    </DashboardLayout>
  );
}
