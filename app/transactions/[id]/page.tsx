const Transaction = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Transaction {id}</h1>
      <p className="text-gray-500">Transaction details will be displayed here.</p>
    </div>
  );
}
export default Transaction;