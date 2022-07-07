import { CssBaseline, Container, Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { paths } from '../../configs/constants'

export default function Index() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl" disableGutters>
                <Box className="bg-light" sx={{ height: '100vh' }} >
                    <h5 className="text-center">Select one item...</h5>
                    <div className="row justify-content-center gap-2">
                        <Link to={paths.layout1} className="nav-link col-md-3">
                            <div className="card border-0 rounded--1 p-5 gradientImg2 text-white text-center textShadow">
                                <h4>Layout 1</h4>
                            </div>
                        </Link>
                        <Link to={paths.layout3.home} className="nav-link col-md-3 ">
                            <div className="card border-0 p-5 rounded--1 gradientImg2 text-white text-center textShadow">
                                <h4>Layout 3</h4>
                            </div>
                        </Link>
                    </div>
                </Box>
            </Container >
        </React.Fragment >
    )
}
