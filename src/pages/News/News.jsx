import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditorInsider from "../EditorInsider/EditorInsider";

const News = () => {
  const news = useLoaderData();
  console.log(news);
  const {
    _id,
    name,
    title,
    details,
    image_url,
    img,
    author,
    published_date,
    category_id,
    total_view,
    rating,
    number,
  } = news;
  return (
    <div>
          <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{details}</Card.Text>

        <Link to={`/category/${category_id}`}>
          <Button variant="danger"> <FaArrowLeft></FaArrowLeft> All news in this category</Button>
        </Link>
      </Card.Body>
      </Card>
      <EditorInsider></EditorInsider>
    </div>
  );
};

export default News;
