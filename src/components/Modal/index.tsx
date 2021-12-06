import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {styles} from "./style";
import {withStyles} from "@material-ui/core";
import {Props} from "./types";


class BasicModal extends React.Component<Props> {
    render() {
        const {classes, children,onClose,open} = this.props;
        return (
                <Modal
                    open={open}
                    onClose={onClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box className={classes.modal}>
                        <div>
                            {children}
                        </div>
                    </Box>
                </Modal>
        );
    }
}
export default withStyles(styles)(BasicModal);

