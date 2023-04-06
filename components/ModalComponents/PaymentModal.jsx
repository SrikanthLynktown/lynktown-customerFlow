import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const PaymentModal = ({ show, onClose, children, title }) => {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    };

    const modalContent = show ? (
        <StyledModalOverlay>
            <StyledModal className="mt-[580px] md:mt-[500px] w-[367px] h-[350px] md:w-[567px] md:h-[396px] ">
                <StyledModalHeader className="px-6">
                    <a href="#" onClick={handleCloseClick}>
                        x
                    </a>
                </StyledModalHeader>
                {title && <StyledModalTitle>{title}</StyledModalTitle>}
                <StyledModalBody>{children}</StyledModalBody>
            </StyledModal>
        </StyledModalOverlay>
    ) : null;

    if (isBrowser) {
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById("modal-root")
        );
    } else {
        return null;
    }
};

const StyledModalBody = styled.div`
  padding-top: px;
`;

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
`;

const StyledModal = styled.div`
  background: white;
  ${'' /* width: 567px;
  height: 396px; */}
  border-radius: 5px;
  padding: px;
  ${'' /* margin-top:510px; */}
`;
const StyledModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;


const StyledModalTitle = styled.div`
  padding-left:0.1px
`;
export default PaymentModal;