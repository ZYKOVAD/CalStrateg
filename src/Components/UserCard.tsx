import { Avatar, Button, Grid, Stack, Typography, } from "@mui/material";

export default function UserCard(){
    return(<>
        <Grid container sx={{
            border: 1,
            borderRadius: 5,
            width: 700,
            marginTop: 5,
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: '#e3e3e3',
            padding: 3,
            
        }}>
            <Grid item xs={4} >
                <Stack>
                    <Avatar sx={{height: 150, width: 150, ml: 'auto', mr: 'auto', marginTop: 3}}>A</Avatar>
                    <Button variant="contained"
                        sx={{
                            width: 120, 
                            ml: 'auto', 
                            mr: 'auto', 
                            marginTop: 3, 
                            backgroundColor: '#902B2B', 
                            fontFamily: 'Russo One',
                            textTransform: 'capitalize',
                            "&:hover": { backgroundColor: "#902B2B", }
                            }}>Изменить</Button>

                    <Button variant="contained"
                        sx={{
                            width: 120, 
                            ml: 'auto', 
                            mr: 'auto', 
                            marginTop: 2,
                            backgroundColor: '#999',
                            fontFamily: 'Russo One',
                            textTransform: 'capitalize',
                            "&:hover": { backgroundColor: "#999", }
                            }}>Выйти</Button>
                </Stack>
            </Grid>

            <Grid item xs={4} >
                <Typography marginLeft={2} >
                    <p className="item_info">Логин</p>
                    <p className="item_info_value">Login</p>
                    <p className="item_info">Пароль</p>
                    <p className="item_info_value">******</p>
                    <p className="item_info">Почта</p>
                    <p className="item_info_value">test@gmail.com</p>
                    <p className="item_info">Пол</p>
                    <p className="item_info_value">жен</p>
                    <p className="item_info">Энергетическая норма</p>
                    <p className="item_info_value">2000 ккал</p>
                </Typography>
            </Grid>

            <Grid item xs={4} >
            <Typography marginLeft={2} >
                    <p className="item_info">Цель</p>
                    <p className="item_info_value">Набор веса</p>
                    <p className="item_info">Начальный вес</p>
                    <p className="item_info_value">60 кг</p>
                    <p className="item_info">Текущий вес</p>
                    <p className="item_info_value">70 кг</p>
                    <p className="item_info">Целевой вес</p>
                    <p className="item_info_value">80 кг</p>
                </Typography>

            </Grid>
        </Grid>

        </>
    
    )
}