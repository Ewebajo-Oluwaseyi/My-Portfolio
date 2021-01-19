import React, {useState} from 'react';
import {Grid, Cell, Tabs, Tab, Card, CardTitle,CardText,CardActions,CardMenu,Button,IconButton} from 'react-mdl'

function Projects() {
    const [activeTab, setActiveTab] = useState(0);

    const toggleCategories = () => {
        if(activeTab === 0){
            return(
            <div style={{display: 'flex'}}>
                <Card shadow={5} style={{width: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', 
                background: 'url(https://reactjs.org/logo-og.png) center / cover'}}>
                    First Project
                </CardTitle>
                <CardText>
                    A Todo App
                </CardText>
                <CardActions border>
                <Button colored>Github</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <a href="https://github.com/Ewebajo-Oluwaseyi/Todo" target="_blank" rel="noreferrer">
                <IconButton name="share"/>
                </a>
                </CardMenu>
                </Card>
                <Card shadow={5} style={{width: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', 
                background: 'url(https://reactjs.org/logo-og.png) center / cover'}}>
                    Second Project
                </CardTitle>
                <CardText>
                    An Online Store
                </CardText>
                <CardActions border>
                <Button colored>Github</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <a href="https://github.com/Ewebajo-Oluwaseyi/My-online-store" target="_blank" rel="noreferrer">
                <IconButton name="share"/>
                </a>
                </CardMenu>
                </Card>
            </div>
            )
        } else if(activeTab === 1){
            return <div><h2>Javascript</h2></div>
        }
    } 


    return (
        <div className="category-tabs">
            <Tabs activeTab={activeTab} onChange={(tabId) => setActiveTab({activeTab : tabId})} ripple>
                <Tab>React</Tab>
                <Tab>Javascript</Tab>
            </Tabs>
            <Grid>
                <Cell col={12}>
                    <div className="content">{toggleCategories()}</div>
                </Cell>
            </Grid>
        </div>
    )
}

export default Projects
