import { Card, CardActions, CardContent, CardMedia, Typography, Button, CardActionArea } from '@mui/material'
import React from 'react'
import { FaShare } from 'react-icons/fa6'

const News = () => {
  return (
   <>
   <section id='news'>
   <div className="container px-4 py-7 mx-auto">
   <div className='flex overflow-x-auto gap-4'>
        <div>
        <Card sx={{width : 300}}>
        <CardActionArea>
        <CardMedia sx={{height:200}} image='/imagesr1.jpg' />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                News One
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam velit, eos alias voluptatibus nostrum nobis vitae repudiandae sequi minus itaque non! Esse amet eius eaque quos quaerat. Accusantium, quis illo!
        </Typography>
        </CardContent>
        <CardActions>
        <Button sx={{fontSize:'20px'}}><FaShare /></Button>
        </CardActions>
        </CardActionArea>
    </Card>
        </div>
        <div>
        <Card sx={{width : 300}}>
        <CardActionArea>
        <CardMedia sx={{height:200}} image='/imagesr2.jpg' />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                News One
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam velit, eos alias voluptatibus nostrum nobis vitae repudiandae sequi minus itaque non! Esse amet eius eaque quos quaerat. Accusantium, quis illo!
        </Typography>
        </CardContent>
        <CardActions>
        <Button sx={{fontSize:'20px'}}><FaShare /></Button>
        </CardActions>
        </CardActionArea>
    </Card>
        </div>

        <div>
        <Card sx={{width : 300}}>
        <CardActionArea>
        <CardMedia sx={{height:200}} image='/imagesr3.jpg' />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                News One
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam velit, eos alias voluptatibus nostrum nobis vitae repudiandae sequi minus itaque non! Esse amet eius eaque quos quaerat. Accusantium, quis illo!
        </Typography>
        </CardContent>
        <CardActions>
        <Button sx={{fontSize:'20px'}}><FaShare /></Button>
        </CardActions>
        </CardActionArea>
    </Card>
        </div>

        <div>
        <Card sx={{width : 300}}>
        <CardActionArea>
        <CardMedia sx={{height:200}} image='/imager4.jpg' />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                News One
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam velit, eos alias voluptatibus nostrum nobis vitae repudiandae sequi minus itaque non! Esse amet eius eaque quos quaerat. Accusantium, quis illo!
        </Typography>
        </CardContent>
        <CardActions>
        <Button sx={{fontSize:'20px'}}><FaShare /></Button>
        </CardActions>
        </CardActionArea>
    </Card>
        </div>
   </div>
   </div>
   </section>
   </>
  )
}

export default News