"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import classes from "./image-picker.module.css";
interface Props {
  label: string;
  name: string;
}
export default function ImagePicker({ label, name }: Props) {
  const ref = useRef<HTMLInputElement | null>(null);
  const [pickedImage, setPickedImage] = useState<string | null>(null);

  const handlePickedImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      setPickedImage(fileReader.result as string);
    };
  };
  const handlePickImage = () => {
    ref.current?.click();
  };
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No Image Picked yet!</p>}
          {pickedImage && (
            <Image src={pickedImage} alt="Image Selected by user" fill />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          name={name}
          accept="image/jpeg, image/png"
          ref={ref}
          onChange={handlePickedImage}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickImage}
        >
          Pick Image
        </button>
      </div>
    </div>
  );
}
