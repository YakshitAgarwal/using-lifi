import { TxFormData } from "../types/form";

type FormDetailsProps = {
  formData: TxFormData;
  setFormData: React.Dispatch<React.SetStateAction<TxFormData>>;
};

const FormDetails = ({ formData, setFormData }: FormDetailsProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col gap-4">
      <input
        name="fromChain"
        value={formData.fromChain}
        onChange={handleChange}
        className="border-2"
        placeholder="From Chain"
        required
      />
      <input
        name="toChain"
        value={formData.toChain}
        onChange={handleChange}
        className="border-2"
        placeholder="To Chain"
        required
      />
      <input
        name="fromToken"
        value={formData.fromToken}
        onChange={handleChange}
        className="border-2"
        placeholder="From Token"
        required
      />
      <input
        name="toToken"
        value={formData.toToken}
        onChange={handleChange}
        className="border-2"
        placeholder="To Token"
        required
      />
      <input
        name="fromAmount"
        value={formData.fromAmount}
        onChange={handleChange}
        className="border-2"
        placeholder="From Amount"
        required
      />
    </div>
  );
};

export default FormDetails;
