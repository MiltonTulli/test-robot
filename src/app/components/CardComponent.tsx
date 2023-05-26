import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Title } from '@mui/icons-material';

export default function CardComponent({ id, name, title, model, description, price, image }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={name}
        height="140"
        image= {image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title} - {model}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy Now!</Button>
    </CardActions>
    </Card>
  );
};


