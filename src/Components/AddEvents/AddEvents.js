import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddEvents = () => {
  const [imageUrl, setImageUrl] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const eventData = {
      name: data.name,
      imageUrl: imageUrl,
    };
    const url = "http://localhost:4000/addEvent";
    console.log(eventData);

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    }).then((res) => console.log("Server side response", res));
  };

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "4d2917a1648a2309ca2f415f3974a5e6");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then((res) => {
        setImageUrl(res.data.data.display_url);
      })
      .then((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          defaultValue="New Exciting Event"
          {...register("name")}
          required
        />

        <input
          name="exampleRequired"
          type="file"
          onChange={handleImageUpload}
          required
        />
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
};

export default AddEvents;
