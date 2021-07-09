import React, {useEffect} from 'react'
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    TextField,
    Button,
    Grid,
    Typography
} from '@material-ui/core'
import {useForm} from 'react-hook-form'

type FormValuesType = {
    email: string
    password: string
    rememberMe: boolean
}

export const Login = () => {

    const {register, handleSubmit, formState: {errors}, setValue} = useForm<FormValuesType>({mode: "all"})
    const onSubmit = () => {

    }

    useEffect(() => {
        register("rememberMe")
    }, [register])

    return <Grid container justify="center">
        <Grid item xs={4}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl>
                    <FormLabel>
                        <p>To log in get registered
                            <a rel="noreferrer" href={'https://social-network.samuraijs.com/'} target={'_blank'}> here </a>
                        </p>
                        <p>or use common test account credentials:</p>
                        <p>Email: free@samuraijs.com</p>
                        <p>Password: free</p>
                    </FormLabel>
                    <FormGroup>
                        <TextField
                            label="Email"
                            margin="normal"
                            {...register("email", {required: "Email is a required field"})}
                        />
                        {errors.email && <Typography variant="inherit" color="secondary">
                            {errors.email.message}
                        </Typography>
                        }
                        <TextField
                            type="password"
                            label="Password"
                            margin="normal"
                            {...register("password", {
                                required: "Password is a required field", minLength: {
                                    value: 8,
                                    message: 'Your password must be greater than 6 characters',
                                },
                            })}
                        />
                        {errors.password && <Typography variant="inherit" color="secondary">
                            {errors.password.message}
                        </Typography>}
                        <FormControlLabel
                            label="Remember Me"
                            control={<Checkbox
                                color="primary"
                                onChange={e => setValue("rememberMe", e.target.checked)}
                            />
                            }
                        />
                        <Button type={'submit'} variant={'contained'} color={'primary'}>Login</Button>
                    </FormGroup>
                </FormControl>
            </form>
        </Grid>
    </Grid>
}
