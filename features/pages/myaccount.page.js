class MyAccount {
  //  Page Objects
  get btnMyAddress() {
    return $(".icon-building");
  }

  get btnOrderHistory() {
    return $(".icon-list-ol");
  }

  get btnPersonalInfo() {
    return $(".icon-user");
  }

  get btnMyWishList() {
    return $(".icon-heart");
  }

  // Address Page
  get btnPageHeading() {
    return $(".page-heading");
  }

  get txtGetAddressName() {
    return $(".last_item.item.box li:nth-child(2)");
  }

  get txtAddressCompany() {
    return $(".address_company");
  }

  get txtAddress1() {
    return $(".address_address1");
  }

  get txtAddress2() {
    return $(".address_address2");
  }

  get myAccountSection(){
    return $("#my-account");
  }

  // get linkWomen(){
  //   return $('.sf-with-ul');
  // }

  get linkTshirts(){
    return $(".//div[@id='block_top_menu']/ul/li/a[@title='T-shirts']");
  }

  get tshirtLink(){
    return $("img[title='Faded Short Sleeve T-shirts']");
  }

  get checkOutMessage(){
    return $("div.layer_cart_product");
  }

  get addressPageLink(){
    return $('[name="processAddress"]');
  }

  get checkboxTerm(){
    return $('[name="cgv"]');
  }

  get btnAddToCart(){
    return $('[name="Submit"]');
  }

  get checkoutCarrier(){
   return $('[name="processCarrier"]');
  }

  // Actions

  navigateToAddress = async () => {
    await this.btnMyAddress.click();
  };

  // navigateToWomenSection = async () => {
  //   await this.linkWomen.click();
  // };

  navigateToTshirtSection = async () => {
    await this.linkTshirts.click();
  };

  navigateToProductPage = async () => {
    await browser.url("http://automationpractice.com/index.php?id_product=1&controller=product");
    await this.btnAddToCart.click();
  };  

  
navigateToCheckOutPage = async () => {
  await browser.url("http://automationpractice.com/index.php?controller=order");
  await browser.url("http://automationpractice.com/index.php?controller=order&step=1");
  await this.addressPageLink.click();
  await this.checkboxTerm.click();
  await this.checkoutCarrier.click();
};

}
export default new MyAccount();
