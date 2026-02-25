import { Suspense, lazy } from 'react';
import PublicRunningCampaigns from '@/components/campaign/PublicCampaigns';
import HeroBanner from '@/components/home/HeroBanner';
import { LinearProgress, Typography } from '@mui/material';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import useSession from '@/hooks/useSession';
import { useTranslation } from 'react-i18next';

const AssignedCampaigns = lazy(() => import('@/components/campaign/AssignCampaigns'));

const Dashboard = () => {
  const session = useSession();
  const { t } = useTranslation()
  
  return (
    <>
      <Header />
      <HeroBanner session={session} />
      {session && (
        <Suspense fallback={<LinearProgress sx={{ m: 2 }} />}>
          <AssignedCampaigns limit={5} />
        </Suspense>
      )}

      <div className="" style={{}}>
        <Typography variant="h4" sx={{
          textAlign: 'center', m: 3,
           // backgroundImage: 'linear-gradient(to right, red 20%,  blue 80%)',
          backgroundClip: 'text'
        }} color='error'>
          {t('home.publicRunningCampaigns')}
        </Typography>
        <PublicRunningCampaigns limit={10} />
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
