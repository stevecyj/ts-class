class Order {
  // 訂單、id, 訂單日期，顧客地址，顧客名，顧客Line，顧客手機號，客服
  public orderId: number = 0;
  public date: Date = new Date();
  public custName: string = 'nocustname';
  public phone: string = '111';

  constructor(
    orderId_: number,
    date_: Date,
    custName_: string,
    phone_: string
  ) {
    this.orderId = orderId_;
    this.date = date_;
    this.custName = custName_;
    this.phone = phone_;
  }
}
