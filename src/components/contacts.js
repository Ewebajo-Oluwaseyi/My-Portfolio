import React from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import style from './contacts.module.css'


function contacts() {
    return (
        <div className={style.contactBody}>
            <Grid className={style.contactGrid}>
                <Cell col={5}>
                    <h2 className={style.contactGridH2}>Ewebajo Oluwaseyi</h2>
                    <img src="/image/img.jpg" alt='avatar' style={{height: '300px'}}/>
                </Cell>
                <Cell col={5}>
                <h2>Contact Me</h2>
                <hr style={{margin: 'auto', borderTop: '4px thin black', width: '50%'}}/>
                <List>
                    <ListItem>
                        <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                            <i style={{fontSize: '60px', paddingRight:'5rem'}} className="fa fa-phone-square" aria-hidden="true"/>
                            08179058217
                        </ListItemContent>
                    </ListItem>
                    <ListItem>
                        <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                            <i style={{fontSize: '60px', paddingRight:'5rem'}} className="fa fa-envelope" aria-hidden="true"/>
                            seyiewebajo@gmail.com
                        </ListItemContent>
                    </ListItem>
                    <ListItem>
                        <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                            <i style={{fontSize: '60px', paddingRight:'5rem'}} className="fa fa-skype" aria-hidden="true"/>
                            Ewebajo Oluwaseyi
                        </ListItemContent>
                    </ListItem>
                    <ListItem>
                        <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                            <i style={{fontSize: '60px', paddingRight:'5rem'}} className="fa fa-twitter" aria-hidden="true"/>
                            sheifunmi_
                        </ListItemContent>
                    </ListItem>
                </List>
                </Cell>
            </Grid>
        </div>
    )
}

export default contacts
