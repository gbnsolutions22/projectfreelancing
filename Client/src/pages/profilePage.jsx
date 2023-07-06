import React, { useEffect, useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase";
const ProfilePage = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [isEditing, setIsEditing] = useState(true);
  const userData = useSelector((state) => state.bootStrap.user);

  const handleEdit = () => {
    setIsEditing(true);
  };
  useEffect(() => {
    setDisplayName(userData.displayName);
    setEmail(userData.email);
    setMobileNumber(userData.phoneNumber);
  }, [userData]);
  const handleSave = async () => {
    const user = auth.currentUser;
    const newProfile = {
      displayName: displayName,
      email: email,
      phoneNumber: mobileNumber,
    };
    try {
      await updateProfile(user, newProfile);
      console.log("User profile updated successfully!");
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
    // Disable editing mode
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Reset fields to their original values
    setDisplayName(userData.displayName || "");
    setEmail(userData.email || "");
    setMobileNumber(userData.phoneNumber || "");

    // Disable editing mode
    setIsEditing(false);
  };

  return (
    <div className="flex justify-center">
      <Box className="flex flex-col justify-center items-center w-[30vw]">
        <TextField
          label="Display Name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          disabled={!isEditing}
          className="w-full"
          sx={{ marginY: 2 }}
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={!isEditing}
          className="w-full"
          sx={{ marginY: 2 }}
        />
        <TextField
          label="Mobile Number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          disabled={!isEditing}
          className="w-full"
          sx={{ marginY: 2 }}
        />
        {!isEditing ? (
          <Button
            variant="contained"
            onClick={handleEdit}
            className="w-full"
            sx={{ marginY: 2 }}
          >
            Edit
          </Button>
        ) : (
          <>
            <Button
              variant="contained"
              onClick={handleSave}
              className="w-full"
              sx={{ marginY: 2 }}
            >
              Save
            </Button>
            <Button
              variant="contained"
              onClick={handleCancel}
              className="w-full"
              sx={{ marginY: 2 }}
            >
              Cancel
            </Button>
          </>
        )}
      </Box>
    </div>
  );
};

export default ProfilePage;
