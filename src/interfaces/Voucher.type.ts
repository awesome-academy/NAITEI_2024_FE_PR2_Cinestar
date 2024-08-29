export interface VoucherProps {
    voucher: {
        title: string;
        subTitle: string;
        condition: string[];
        notes: string[];
        image: string;
        reverse?: boolean;
    }
}
