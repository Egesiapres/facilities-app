import { useState } from 'react';

const useModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const modal = { open, handleOpen, handleClose };
  return modal;
};

export default useModal;

// NOTES:
// avoids (a lot of open and) all the setOpen props
// !!!: not separate open from its respective f
// (otherwise problems with the states between components)
// return { example, ... }
// custom hooks allows to avoid repetitions
