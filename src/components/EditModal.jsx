"use client";

import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
  Select,
  ListBox,
  FieldError,
  TextArea, // Assuming this is exported in your setup based on your previous code
} from "@heroui/react";
import { Trash2, Save, Pencil } from "lucide-react";

export function EditModal({ destination }) {
  const handleDestination = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const destinationData = Object.fromEntries(formData.entries());

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${destination?._id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(destinationData),
      }
    );
    const data = await res.json();
    console.log(data);
  };

  return (
    <Modal>
      <Button
        variant="bordered"
        startContent={<Pencil size={16} />}
        className="border-gray-200 text-gray-700 bg-white"
      >
        Edit
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          {/* Increased max-width to 2xl and added sharp corners/white background */}
          <Modal.Dialog className="sm:max-w-2xl rounded-none bg-white">
            <Modal.CloseTrigger />

            {/* Updated Header */}
            <Modal.Header className="pt-8 px-8 pb-4">
              <Modal.Heading className="text-xl font-normal text-gray-800">
                Update Travel Package
              </Modal.Heading>
              <p className="mt-1 text-sm text-gray-500">
                Make changes to the travel package details below
              </p>
            </Modal.Header>

            {/* Wrapped the Body and Footer inside the form to ensure submit works */}
            <form onSubmit={handleDestination}>
              <Modal.Body className="px-8 py-2">
                <Surface
                  variant="default"
                  className="bg-transparent shadow-none"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                    {/* Destination Name (No label, just placeholder as per image) */}
                    <div className="md:col-span-2">
                      <TextField
                        name="destinationName"
                        defaultValue={destination?.destinationName}
                        isRequired
                      >
                        <Input className="rounded-sm bg-gray-50/80 border-none shadow-none h-11" />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Country */}
                    <TextField
                      name="country"
                      defaultValue={destination?.country}
                      isRequired
                    >
                      <Label className="font-semibold text-gray-800 mb-1 text-sm">
                        Country
                      </Label>
                      <Input className="rounded-sm bg-gray-50/80 border-none shadow-none h-11" />
                      <FieldError />
                    </TextField>

                    {/* Category */}
                    <div>
                      <Select
                        name="category"
                        isRequired
                        className="w-full"
                        defaultValue={destination?.category}
                      >
                        <Label className="font-semibold text-gray-800 mb-1 text-sm">
                          Category
                        </Label>
                        <Select.Trigger className="rounded-sm bg-gray-50/80 border-none shadow-none h-11">
                          <Select.Value />
                          <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                          <ListBox>
                            <ListBox.Item id="Beach" textValue="Beach">
                              Beach <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="Luxury" textValue="Luxury">
                              Luxury <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="City" textValue="City">
                              City <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="Cultural" textValue="Cultural">
                              Cultural <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="Adventure" textValue="Adventure">
                              Adventure <ListBox.ItemIndicator />
                            </ListBox.Item>
                          </ListBox>
                        </Select.Popover>
                      </Select>
                    </div>

                    {/* Price */}
                    <TextField
                      name="price"
                      type="number"
                      defaultValue={destination?.price}
                      isRequired
                    >
                      <Label className="font-semibold text-gray-800 mb-1 text-sm">
                        Price (USD)
                      </Label>
                      <Input
                        type="number"
                        className="rounded-sm bg-gray-50/80 border-none shadow-none h-11"
                      />
                      <FieldError />
                    </TextField>

                    {/* Duration */}
                    <TextField
                      name="duration"
                      defaultValue={destination?.duration}
                      isRequired
                    >
                      <Label className="font-semibold text-gray-800 mb-1 text-sm">
                        Duration
                      </Label>
                      <Input className="rounded-sm bg-gray-50/80 border-none shadow-none h-11" />
                      <FieldError />
                    </TextField>

                    {/* Departure Date */}
                    <div className="md:col-span-2">
                      <TextField
                        name="departureDate"
                        type="text"
                        defaultValue={destination?.departureDate}
                        isRequired
                      >
                        <Label className="font-semibold text-gray-800 mb-1 text-sm">
                          Departure Date
                        </Label>
                        <Input
                          type="text"
                          className="rounded-sm bg-gray-50/80 border-none shadow-none h-11"
                        />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Image URL */}
                    <div className="md:col-span-2">
                      <TextField
                        name="imageUrl"
                        defaultValue={destination?.imageUrl}
                        isRequired
                      >
                        <Label className="font-semibold text-gray-800 mb-1 text-sm">
                          Image URL
                        </Label>
                        <Input
                          type="url"
                          className="rounded-sm bg-gray-50/80 border-none shadow-none h-11"
                        />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                      <TextField
                        name="description"
                        defaultValue={destination?.description}
                        isRequired
                      >
                        <Label className="font-semibold text-gray-800 mb-1 text-sm">
                          Description
                        </Label>
                        <TextArea className="rounded-sm bg-gray-50/80 border-none shadow-none min-h-[100px] resize-none" />
                        <FieldError />
                      </TextField>
                    </div>
                  </div>
                </Surface>
              </Modal.Body>

              {/* Updated Footer aligned to the right with exact button styling */}
              <Modal.Footer className="px-8 pb-8 pt-4 flex justify-end gap-3 border-t-0">
                <Button
                  slot="close"
                  variant="outline"
                  className="rounded-sm border-red-400 text-red-500 font-medium px-6 hover:bg-red-50"
                  startContent={<Trash2 size={16} />}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="rounded-sm bg-[#1FB6CD] text-white font-medium px-6 hover:bg-[#199db1]"
                  startContent={<Save size={16} />}
                >
                  Save Changes
                </Button>
              </Modal.Footer>
            </form>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
