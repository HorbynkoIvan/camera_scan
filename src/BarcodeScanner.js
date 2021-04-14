import React, {useEffect} from "react";
import BarcodeScannerComponent from "react-webcam-barcode-scanner";

function BarcodeScanner() {
    const [barcode, setBarcode] = React.useState('Not Found');
    const handleUpdate = (err, result) => {
        if (result) {
            setBarcode(result.text)
        }
    }
    useEffect(() => {
        if (Number.isInteger(+barcode)) {
            console.log(`Barcode ${barcode} sent to backend`)
        }
    }, [barcode])

    return (
        <>
            <BarcodeScannerComponent
                width={500}
                height={300}
                onUpdate={handleUpdate}
            />
            <p>{barcode}</p>
        </>
    )
}

export default BarcodeScanner;