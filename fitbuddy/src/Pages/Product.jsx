import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Product = () =>{
    const productItem=[
        {
            name: "Protein",
            url: "http://surl.li/fessg",
            content:"Protein powder is a type of dietary supplement. The Food and Drug Administration (FDA) defers manufacturers in determining product safety and labeling."
        },
        {
            name: "Protein",
            url: "http://surl.li/fessg",
            content:"Protein powder is a type of dietary supplement. The Food and Drug Administration (FDA) defers manufacturers in determining product safety and labeling."
        },
        {
            name: "Protein",
            url: "http://surl.li/fessg",
            content:"Protein powder is a type of dietary supplement. The Food and Drug Administration (FDA) defers manufacturers in determining product safety and labeling."
        },
        {
            name: "Protein",
            url: "http://surl.li/fessg",
            content:"Protein powder is a type of dietary supplement. The Food and Drug Administration (FDA) defers manufacturers in determining product safety and labeling."
        },
        {
            name: "Protein",
            url: "http://surl.li/fessg",
            content:"Protein powder is a type of dietary supplement. The Food and Drug Administration (FDA) defers manufacturers in determining product safety and labeling."
        },
        {
            name: "Protein",
            url: "http://surl.li/fessg",
            content:"Protein powder is a type of dietary supplement. The Food and Drug Administration (FDA) defers manufacturers in determining product safety and labeling."
        },
        
    ]
    return(
        <div className='productPG'>
           <div className="row me-auto">
            {

                productItem.map((items,index)=>(
            <div className="col-4 mb-4">
            <Card sx={{ maxWidth: 345 , backgroundColor: "black" , minWidth: 345}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={items.url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color={'white'}>
          {items.name}
        </Typography>
        <Typography variant="body2" color={'white'}>
          {items.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
                ))
}
    </div>
    </div>
    )
}
export default Product;