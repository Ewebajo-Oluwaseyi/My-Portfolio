import React from 'react'
import { Cell, Grid } from 'react-mdl';
import style from './landingpage.module.css'

function landingpage() {
    return (
        <div className={style.div}>
            <Grid className={style.landingGrid}>
                <Cell col={12}>
                 <img src='/image/img.jpg' alt='Avatar' className={style.avatarImg}/>
                </Cell>
                <div className={style.banner}>
                <h1 className={style.bannerH1}>Ewebajo Oluwaseyi</h1>
                <h2 className={style.bannerH2}>WEB DEVELOPER</h2>
                <hr className={style.bannerHr}/>
                <p  className={style.bannerP}>HTML | CSS | Javascript | React </p>
                <div className={style.socialLinks}>
                    <a  href="https://www.linkedin.com/in/ewebajo-oluwaseyi/" target="_blank" rel="noreferrer">
                        <i style={{color: 'white', fontSize: '80px', padding: '8px'}} class="fa fa-linkedin-square" aria-hidden="true"></i>
                    </a>
                    <a  href="https://github.com/Ewebajo-Oluwaseyi" target="_blank" rel="noreferrer">
                        <i style={{color: 'white', fontSize: '80px', padding: '8px'}} class="fa fa-github-square" aria-hidden="true"></i>
                    </a>
                </div>
                </div>
            </Grid>
        </div>
        
    )
}

export default landingpage
