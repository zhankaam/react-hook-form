import React from 'react'
import {Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, TextField, Button, Grid} from '@material-ui/core'
import {useForm} from 'react-hook-form'

type FormValuesType = {
    email: string
    password: string
    rememberMe: boolean
}

export const Login = () => {

    const {register, handleSubmit, formState: {errors}, watch} = useForm<FormValuesType>()
    const onSubmit = () => {

    }
    console.log(watch())

    return <Grid container justify="center">
        <Grid item xs={4}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl>
                    <FormLabel>
                        <p>To log in get registered
                            <a href={'https://social-network.samuraijs.com/'}
                               target={'_blank'}>here
                            </a>
                        </p>
                        <p>or use common test account credentials:</p>
                        <p>Email: free@samuraijs.com</p>
                        <p>Password: free</p>
                    </FormLabel>
                    <FormGroup>
                        <TextField
                            label="Email"
                            margin="normal"
                            {...register("email", {required: "Email is required"})}
                        />
                        {errors.email && <p>{errors.email.message}</p>}
                        <TextField
                            type="password"
                            label="Password"
                            margin="normal"
                            {...register("password", {required: "Password is required", minLength: 8})}
                        />
                        {errors.password && <p>{errors.password.message}</p>}
                        <FormControlLabel
                            label={"Remember me"}
                            control={<Checkbox />}
                            {...register("rememberMe")}

                        />
                        <Button type={'submit'} variant={'contained'} color={'primary'}>Login</Button>
                    </FormGroup>
                </FormControl>
            </form>
        </Grid>
    </Grid>
}
