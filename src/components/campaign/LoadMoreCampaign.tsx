import { Button, Card } from "@mui/material"
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom"
import ArrowForward from '@mui/icons-material/ArrowForward';

type LoadMoreCampaignChipProps = {
    link: string
    labelText?: string
}

const StyledCard = styled(Card)`
  ${({ theme }) => `
  cursor: pointer;
  transition: ${theme.transitions.create(['transform'], {
    duration: theme.transitions.duration.standard,
})};
  &:hover {
    transform: scale(1.05);
  }
  `}
`;

const LoadMoreCampaignChip = ({ link, labelText = 'Show All' }: LoadMoreCampaignChipProps) => {
    return (
        <StyledCard sx={{
            cursor: 'pointer',
            boxShadow: 1, margin: 1, p: 2,
            display: 'inline-block',
            borderRadius: 8,
            '&:hover': {
                boxShadow: 3
            },
            width: {
                xs: 'calc(95% - 4px)',
                sm: 'calc(50% - 4px)',
                md: 'calc(33.33% - 4px)',
                lg: 'calc(30% - 4px)',
                xl: 'calc(28% - 4px)',
            },
            mx: 2,
            textAlign: 'center',
            verticalAlign: 'middle',
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                flexDirection: 'column',
                textAlign: 'center',
                verticalAlign: 'middle',
                padding: '20px',
            }
            }>
                <Link to={link} style={{}}>
                    <Button color="primary" endIcon={<ArrowForward />} variant="text" sx={{ borderRadius: 8, px: 2, fontSize: 24 }} size="large">
                        {labelText}
                    </Button>
                </Link>
            </div>
        </StyledCard >
    )
}

export default LoadMoreCampaignChip
