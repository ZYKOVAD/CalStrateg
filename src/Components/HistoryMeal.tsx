import { Box, Button, Grid, Typography } from "@mui/material";
import HMTable from "./HMTable";

export default function HistoryMeal(){
    return(
        <Box sx={{
            width: 800,
            marginTop: 5,
            marginLeft: "auto",
            marginRight: "auto",
            
        }}>
            <Typography align="center" sx={{
                fontFamily: 'Russo One',
                fontWeight: 400,
                fontSize: 20,
                margin: 2,
            }}>Иcтория приемов пищи</Typography>
            
            <Box sx={{
                borderRadius: 5,
                backgroundColor: "white",
                padding: 2,

            }}>
            
                <Typography align="center" paddingBottom={2} sx={{fontFamily: 'Russo One', fontSize: 20}}>
                    12.12.12
                </Typography>

                <Grid container sx={{
                    backgroundColor: '#e8e8e8',
                    borderRadius: 5,
                    paddingX: 3,
                    marginBottom: 2,
                }}>
                    <Grid item xs={3} textAlign={'center'}>
                        <p className="HMName">Ккал</p>
                        <p>0</p>
                    </Grid>
                    <Grid item xs={3} textAlign={'center'}>
                        <p className="HMName">Белки</p>
                        <p>0</p>
                    </Grid>
                    <Grid item xs={3} textAlign={'center'}>
                        <p className="HMName">Жиры</p>
                        <p>0</p>
                    </Grid>
                    <Grid item xs={3} textAlign={'center'}>
                        <p className="HMName">Углеводы</p>
                        <p>0</p>
                    </Grid>
                </Grid>

                <HMTable></HMTable>

                <Grid container>
                    <Grid item xs={8}>
                        <p style={{ fontFamily: 'Russo One', color: '#8F2323', fontSize: 20, marginLeft: 5}}>Сегодня вы выполнили норму!</p>
                    </Grid>
                    <Grid item xs={4} sx={{
                    }}>
                        <Button variant="contained" sx={{
                             width: 250,
                             backgroundColor: '#902B2B', 
                             fontFamily: 'Russo One',
                             fontSize: 20,
                             textTransform: 'capitalize',
                             "&:hover": { backgroundColor: "#902B2B", },
                             marginTop: 1,
                             borderRadius: 2,
                        }}>
                            Добавить
                        </Button>
                    </Grid>

                </Grid>

            </Box>

        
        </Box>
    )
}