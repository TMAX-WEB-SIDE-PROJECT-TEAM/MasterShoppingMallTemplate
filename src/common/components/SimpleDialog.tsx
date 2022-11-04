import { ReactNode, useState } from "react";
import Dialog from "@mui/material/Dialog";

import { ImageViewerCloseSVG } from "common/components/Assets";

import styles from "common/components/SimpleDialog.module.scss";

interface SimpleDialogProps {
  children: ReactNode;
  renderTarget: (args: { onClick: () => void }) => ReactNode;
}

/**
 * 원하는 컴포넌트("target")를 클릭했을 때 dialog를 열도록 해줍니다.
 */
const SimpleDialog = ({ children, renderTarget }: SimpleDialogProps) => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {renderTarget({
        onClick: handleOpen,
      })}
      <Dialog
        PaperProps={{
          className: styles.simpleDialog,
        }}
        open={isOpen}
        onClose={handleClose}
      >
        <div className={styles.simpleDialogArea}>
          {children}
          <button className={styles.simpleDialogCloseButton} onClick={handleClose}>
            <ImageViewerCloseSVG />
          </button>
        </div>
      </Dialog>
    </>
  );
};

export default SimpleDialog;
