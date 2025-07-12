import {Box, Grid} from "@mui/material";
import {useParams} from "react-router-dom";
import {services} from "../../utils/services.jsx";
import {StyledContainer} from "../../components/styled/StyledComponents.jsx";
import ServiceImageGallery from "./components/ServiceImageGallery.jsx";
import ServicePageDescription from "./components/ServicePageDescription.jsx";

function ServicePage() {
    const {serviceRoute} = useParams();
    const service = services.find((item) => item.route === serviceRoute);

    // Oda bulunamadıysa varsayılan değerler
    if (!service) {
        return (
            <StyledContainer sx={{py: 4, textAlign: "center"}}>
                <Typography variant="h4">Oda bulunamadı</Typography>
            </StyledContainer>
        );
    }

    document.title = `${service.title} - Perlas Otel`

    return (
        <Box>
            <StyledContainer sx={{py: {xs: 2, md: 4}}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} mlg={6}>
                        <Box sx={{
                            boxShadow: "0px 0px 16px 0 rgba(0,0,0,0.1)",
                            borderRadius: 2,
                            p: 2,
                            width: '100%',
                            height: {
                                mlg: "calc(100vh - 144px)",
                            },
                            display: 'flex'
                        }}>
                            <ServiceImageGallery imageList={service.images}/>
                        </Box>
                    </Grid>
                    <Grid item xs={12} mlg={6}>
                        <Box sx={{
                            boxShadow: "0px 0px 16px 0 rgba(0,0,0,0.1)",
                            borderRadius: 2,
                            p: 2,
                            width: '100%',
                            height: {
                                mlg: "calc(100vh - 144px)",
                            },
                            overflowY: "auto"
                        }}>
                            <ServicePageDescription item={service}/>
                        </Box>
                    </Grid>
                </Grid>
            </StyledContainer>
        </Box>
    );
}

export default ServicePage;