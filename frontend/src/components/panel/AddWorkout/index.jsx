import { Description, Dialog, DialogPanel } from "@headlessui/react";
import Button from "../../ui/Button";
import { useState } from "react";
import SuccessIcon from "../../header/Auth/Login/SuccessIcon";
import AddWorkoutForm from "./AddWorkoutForm";

const workoutFormFields = [
  {
    id: 1,
    type: "text",
    name: "kms",
    label: "Kms",
    placeholder: "Enter kms",
  },
  {
    id: 2,
    type: "text",
    name: "calories",
    label: "Calories",
    placeholder: "Enter calories",
  },
  {
    id: 3,
    type: "text",
    name: "weight",
    label: "Weight",
    placeholder: "Enter weight",
  },
];

export default function AddWorkout() {
  const [isOpen, setIsOpen] = useState(false);
  const [addWorkoutState, setAddWorkoutState] = useState("initial");

  const closeDialogWithDelay = () => {
    setTimeout(() => {
      setIsOpen(false);
      setAddWorkoutState("initial");
    }, 3000);
  };

  return (
    <>
      <Button
        text="Add Workout"
        color="transparent"
        icon="plus"
        onClick={() => {
          setIsOpen(true);
        }}
      />
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black opacity-50" aria-hidden="true" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white opacity-100 p-12">
            {(addWorkoutState === "initial" || addWorkoutState === "error") && (
              <>
                <Description>Please add your last workout</Description>
                <AddWorkoutForm
                  workoutFormFields={workoutFormFields}
                  setAddWorkoutState={setAddWorkoutState}
                  onAddWorkoutSuccess={closeDialogWithDelay}
                />
              </>
            )}

            {addWorkoutState === "success" && (
              <div className="flex items-center w-full gap-3 text-3xl">
                {" "}
                <SuccessIcon />
                <span>Workout saved!</span>
              </div>
            )}
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
