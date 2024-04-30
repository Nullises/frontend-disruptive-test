"use client";
import {
  Button,
  Card,
  Typography,
  CardHeader,
  CardBody,
  CardFooter,
} from "../components/common/material";

export function ImageCard({ item }: any) {
  return (
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img src={item.url} alt="card-image" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {item.title}
        </Typography>
      </CardBody>
    </Card>
  );
}
