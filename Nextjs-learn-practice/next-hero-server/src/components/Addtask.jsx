"use client";
import { CirclePlus } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { ListBox, Select } from "@heroui/react";


const Addtask = ({ addATask }) => {
    return (
        <div>
            <Modal>
                <Button variant="secondary">Add a Task</Button>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-md">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                    <CirclePlus className="size-5" />
                                </Modal.Icon>
                                <Modal.Heading>Contact Us</Modal.Heading>
                                <p className="mt-1.5 text-sm leading-5 text-muted">
                                    Fill out the form below and we'll get back to you. The modal adapts automatically
                                    when the keyboard appears on mobile.
                                </p>
                            </Modal.Header>
                            <Modal.Body className="p-6">
                                <Surface variant="default">
                                    <form className="flex flex-col gap-4" action={addATask}>
                                        <TextField className="w-full" name="title" type="text" variant="secondary">
                                            <Label>Title</Label>
                                            <Input placeholder="Enter your task title" />
                                        </TextField>
                                        <Select name="priority" className="w-full " variant="secondary" placeholder="Select Priority">
                                            <Label>Priority</Label>
                                            <Select.Trigger>
                                                <Select.Value />
                                                <Select.Indicator />
                                            </Select.Trigger>
                                            <Select.Popover>
                                                <ListBox>
                                                    <ListBox.Item id="High" textValue="High">
                                                        High
                                                        <ListBox.ItemIndicator />
                                                    </ListBox.Item>
                                                    <ListBox.Item id="Medium" textValue="Medium">
                                                        Medium
                                                        <ListBox.ItemIndicator />
                                                    </ListBox.Item>
                                                    <ListBox.Item id="Low" textValue="Low">
                                                        Low
                                                        <ListBox.ItemIndicator />
                                                    </ListBox.Item>
                                                </ListBox>
                                            </Select.Popover>
                                        </Select>
                                        <Select name="status" className="w-full " variant="secondary" placeholder="Select Status">
                                            <Label>Status</Label>
                                            <Select.Trigger>
                                                <Select.Value />
                                                <Select.Indicator />
                                            </Select.Trigger>
                                            <Select.Popover>
                                                <ListBox>
                                                    <ListBox.Item id="Completed" textValue="Completed">
                                                        Completed
                                                        <ListBox.ItemIndicator />
                                                    </ListBox.Item>
                                                    <ListBox.Item id="InProgress" textValue="InProgress">
                                                        In Progress
                                                        <ListBox.ItemIndicator />
                                                    </ListBox.Item>
                                                    <ListBox.Item id="Pending" textValue="Pending">
                                                        Pending
                                                        <ListBox.ItemIndicator />
                                                    </ListBox.Item>
                                                </ListBox>
                                            </Select.Popover>
                                        </Select>
                                        <Select name="category" className="w-full " variant="secondary" placeholder="Select Category">
                                            <Label>Category</Label>
                                            <Select.Trigger>
                                                <Select.Value />
                                                <Select.Indicator />
                                            </Select.Trigger>
                                            <Select.Popover>
                                                <ListBox>
                                                    <ListBox.Item id="Learning" textValue="Learning">
                                                        Learning
                                                        <ListBox.ItemIndicator />
                                                    </ListBox.Item>
                                                    <ListBox.Item id="Career" textValue="Career">
                                                        Career
                                                        <ListBox.ItemIndicator />
                                                    </ListBox.Item>
                                                    <ListBox.Item id="Development" textValue="Development">
                                                        Development
                                                        <ListBox.ItemIndicator />
                                                    </ListBox.Item>
                                                    <ListBox.Item id="Personal" textValue="Personal">
                                                        Personal
                                                        <ListBox.ItemIndicator />
                                                    </ListBox.Item>
                                                </ListBox>
                                            </Select.Popover>
                                        </Select>
                                        <TextField className="w-full" name="description" type="text" variant="secondary">
                                            <Label>Description</Label>
                                            <Input placeholder="Enter your description" />
                                        </TextField>

                                        <Modal.Footer>
                                            <Button slot="close" variant="secondary">
                                                Cancel
                                            </Button>
                                            <Button type="submit" slot="close">Submit task</Button>
                                        </Modal.Footer>
                                    </form>
                                </Surface>
                            </Modal.Body>

                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default Addtask;