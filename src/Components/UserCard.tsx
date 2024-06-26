import { Avatar, Button, Grid, MenuItem, Stack, TextField, ThemeProvider, Typography, createTheme, } from "@mui/material";
import React from "react";

const theme = createTheme({
    palette: {
      primary: { main: '#902B2B'}
    }
  });
  
interface User{
    id: number;
    login : string;
    password: string;
    email: string;
    gender: string;
    kkal: number;
    purpose: string;
    startWeight: number;
    currentWeight: number;
    purposeWeight: number;
}

const genders = ["муж", "жен"];
const purposes = ["снижение веса", "поддерживание веса", "набор веса"];

export default function UserCard(){

    const [login, setLogin] = React.useState("dasha");
    const [password, setPassword] = React.useState("asdfgh");
    const [email, setEmail] = React.useState("example@mail.ru");
    const [gender, setGender] = React.useState("жен");
    const [kkal, setKkal] = React.useState(2500);
    const [purpose, setPurpose] = React.useState("снижение веса");
    const [startWeight, setStartWeight] = React.useState(65);
    const [currentWeight, setCurrentWeight] = React.useState(65);
    const [purposeWeight, setPurposeWeight] = React.useState(55);

    const [editState, setEditState] = React.useState<{state: boolean, value: string}>({state: false, value: "Изменить"});
    
        return(
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
                        }}
                        onClick={() => {
                            if (editState.state === false)
                                setEditState({state: true, value: "Сохранить"})
                            else {
                                /* сделать проверку логина */
                                if (email.includes('@')) {
                                    setEditState({state: false, value: "Изменить"})
                                }
                                else{
                                    alert("Email введён не корретно!")
                                }
                               
                            }
                                
                        }}    
                            >{editState.value}</Button>

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
                <ThemeProvider theme={theme}>
                    <Grid item xs={4} >
                        <Typography marginLeft={2}>
                            <p className="item_info">Логин</p>
                            <p>{
                                editState.state === false ?
                                <p className="item_info_value">{login}</p> :
                                <TextField
                                    required
                                    type="text"
                                    color="primary"
                                    size="small"
                                    defaultValue={login}
                                    onChange={(event) => setLogin(event.target.value)}
                                />
                            }</p>
                             
                            <p className="item_info">Пароль</p>  
                            <p>{
                                /* доделать вывод пароля: добавить функцию скрытия/открытия */
                                editState.state === false ?
                                <p className="item_info_value">........</p> :
                                <TextField
                                    type="password"
                                    size="small"
                                    defaultValue={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                />
                            }</p>

                            <p className="item_info">Почта</p>
                            <p>{
                                editState.state === false ?
                                <p className="item_info_value">{email}</p> :
                                <TextField
                                    type="email"
                                    size="small"
                                    defaultValue={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                            }</p>

                            <p className="item_info">Пол</p>
                            <p>{
                                editState.state === false ?
                                <p className="item_info_value">{gender}</p> :
                                <TextField
                                    select
                                    size="small"
                                    defaultValue={gender}
                                    onChange={(event) => setGender(event.target.value)}> 
                                    {genders.map((option) => (
                                        <MenuItem key={option} value={option}>{option}</MenuItem>
                                    ))}
                                </TextField>
                            }</p>

                            <p className="item_info">Энергетическая норма</p>
                            <p>{
                                <p className="item_info_value">{kkal}</p>
                            }</p>
                        </Typography>
                    </Grid>

                    <Grid item xs={4} >
                        <Typography marginLeft={2} >
                            <p className="item_info">Цель</p>
                            <p>{
                                editState.state === false ?
                                <p className="item_info_value">{purpose}</p> :
                                <TextField
                                    select
                                    color="primary"
                                    size="small"
                                    defaultValue={purpose}
                                    onChange={(event) => setPurpose(event.target.value)}
                                    >
                                    {purposes.map((option) => (
                                        <MenuItem key={option} value={option}>{option}</MenuItem>
                                    ))}
                                </TextField>
                            }</p>

                            <p className="item_info">Начальный вес, кг</p>
                            <p>{
                                editState.state === false ?
                                <p className="item_info_value">{startWeight}</p> :
                                <TextField
                                    type="number"
                                    color="primary"
                                    size="small"
                                    defaultValue={startWeight}
                                    onChange={(event) => setStartWeight(Number(event.target.value))}
                                />
                            }</p>
                            <p className="item_info">Текущий вес, кг</p>
                            <p>{
                                editState.state === false ?
                                <p className="item_info_value">{currentWeight}</p> :
                                <TextField
                                    type="number"
                                    color="primary"
                                    size="small"
                                    defaultValue={currentWeight}
                                    onChange={(event) => setCurrentWeight(Number(event.target.value))}
                                />
                            }</p>

                            <p className="item_info">Целевой вес, кг</p>
                              <p>{
                                editState.state === false ?
                                <p className="item_info_value">{purposeWeight}</p> :
                                <TextField
                                    type="number"
                                    color="primary"
                                    size="small"
                                    defaultValue={purposeWeight}
                                    onChange={(event) => setPurposeWeight(Number(event.target.value))}
                                />
                            }</p>
                        </Typography>
                    </Grid>
                </ThemeProvider>
        </Grid>
    )
}