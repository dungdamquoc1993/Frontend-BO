import Api from "@/services/Api";
import ApiAdmin from "@/services/ApiAdmin";
import ApiPayment from "./ApiPayment";

export default {
  //=========== USER
  getDepositCryptoHistoryByUserid(obj) {
    return ApiPayment().get(`/api/payments/getDepositCryptoHistoryByUserid`, obj);
  },
  
  getWithdrawCryptoHistoryByUserid(obj) {
    return ApiPayment().get(
      `/api/payments/getWithdrawCryptoHistoryByUserid`,
      obj
    );
  },

  loginUser(obj) {
    return Api().post("api/users/login", obj);
  },

  getTokenActive(obj) {
    return Api().post("api/users/activeUser", obj);
  },

  registerUser(obj) {
    return Api().post("api/users/createAccount", obj);
  },

  forgotPassUser(obj) {
    return Api().post("api/users/forgot-password", obj);
  },

  resendConfirUser(obj) {
    return Api().post("api/users/resend-confirmation-email", obj);
  },

  changePassword(obj) {
    return Api().patch("api/users/change-password", obj);
  },

  changePassword2(obj) {
    return Api().patch("api/users/change-password-is", obj);
  },

  getInfoUser() {
    return Api().get("api/users/info");
  },

  updateXacMinhTK(obj) {
    return Api().post("api/users/update-info", obj);
  },

  activeGG2FA(obj) {
    return Api().post("api/users/update-gg2fa", obj);
  },

  unActiveGG2FA(obj) {
    return Api().post("api/users/disable-gg2fa", obj);
  },

  sendGG2FA() {
    return Api().get("api/users/code-2fa");
  },

  createGG2FA() {
    return Api().get("api/users/create-gg2fa");
  },

  loginGG2FA(obj) {
    return Api().post("api/users/login-2fa", obj);
  },

  reloadMoneyDemo() {
    return Api().put("api/users/demo");
  },

  getListHitoryOrder() {
    return Api().get("api/users/listbo");
  },

  sendMoneyLiveToUsdt(obj) {
    return Api().post("api/users/live-to-usdt", obj);
  },

  sendMoneyUsdtToLive(obj) {
    return Api().post("api/users/usdt-to-live", obj);
  },

  withdrawalUserNoiBo(obj) {
    return Api().post("api/users/withdrawal", obj);
  },

  withdrawalUsdtERC(obj) {
    return Api().post("api/users/withdrawal-erc", obj);
  },

  withdrawalUsdtBSC(obj) {
    return Api().post("api/users/withdrawal-bsc", obj);
  },

  withdrawalPaypalNoiBo(obj) {
    return Api().post("api/users/paypal/withdrawal", obj);
  },

  withdrawalPaypalAccount(obj) {
    return Api().post("api/users/paypal/withdrawal-acc", obj);
  },

  getBalanceWallet() {
    return Api().get("api/users/balance-wallet");
  },

  depositWallet(obj) {
    return Api().post("api/users/usdt-wallet", obj);
  },

  depositRequest(obj) {
    return Api().post("api/users/deposit", obj);
  },

  UserBuyVip() {
    return Api().post("api/users/buy-vip");
  },

  getNguoiGioiThieu() {
    return Api().get("api/users/presenter");
  },

  getThongTinLoiNhuan() {
    return Api().get("api/users/bo-statistics");
  },

  getListHisOrder() {
    return Api().get("api/users/history-order");
  },

  getSeachListOrder(obj) {
    return Api().post("api/users/history-order-date", obj);
  },

  getListHisTradeWallet() {
    return Api().get("api/users/history-wallet");
  },

  getListHisTradeWalletNumber(num) {
    return Api().get("api/users/history-wallet/" + num);
  },

  getListHisTradeWalletHH() {
    return Api().get("api/users/history-wallet-co");
  },

  getListHisTradeWalletHHNumber(num) {
    return Api().get("api/users/history-wallet-co/" + num);
  },

  getListHisTradeWalletWGD() {
    return Api().get("api/users/history-wallet-trade");
  },

  getListHisTradeWalletWGDNumber(num) {
    return Api().get("api/users/history-wallet-trade/" + num);
  },

  chiTietLoiNhuanHoaHong() {
    return Api().get("api/users/commission-details");
  },

  chiTietLoiNhuanHoaHongPage(num) {
    return Api().get("api/users/commission-details/" + num);
  },

  getSeachListChiTietHH(obj) {
    return Api().post("api/users/commission-details-date", obj);
  },

  getSeachListLvAgency(obj) {
    return Api().post("api/users/agency-search-lv", obj);
  },

  getSeachListNameAgency(obj) {
    return Api().post("api/users/agency-search-name", obj);
  },

  depositPaypal(obj) {
    return Api().get("api/paypal/pay?a=" + obj.a + "&n=" + obj.n);
  },

  getAddressCoin(coin) {
    return Api().get("api/wallet/" + coin + "/address");
  },

  transWallet(obj) {
    return Api().post("api/exs/trans", obj);
  },

  getSetupWallet() {
    return Api().get("api/setup/wallet");
  },

  getExChangeUser() {
    return Api().get("api/exs/hisUser");
  },

  getStatusServer() {
    return Api().get("status");
  },

  checkGiaoDich(obj) {
    return Api().post("api/user/balance/trans/check", obj);
  },

  getListNotifi(obj) {
    return Api().post("api/users/getListNotifi", obj);
  },

  updateListNotifi(obj) {
    return Api().post("api/users/updateListNotifi", obj);
  },

  //=========== END USER

  //========== MEMBER

  getRevenueNap() {
    return ApiAdmin().get("api/trades/getRevenueNap");
  },

  getRevenueRut() {
    return ApiAdmin().get("api/trades/getRevenueRut");
  },

  getRevenueTrans() {
    return ApiAdmin().get("api/trades/getRevenueTrans");
  },

  getShowDT(obj) {
    return ApiAdmin().post("api/trades/getShowDT", obj);
  },

  changeAccMarketing(obj) {
    return ApiAdmin().post("api/users/changeAcc", obj);
  },

  changePassAdmin(obj) {
    return ApiAdmin().post("api/users/changPassAd", obj);
  },

  createUser(obj) {
    return ApiAdmin().post("api/users/create", obj);
  },

  register(obj) {
    return ApiAdmin().post("api/users/register", obj);
  },

  loginAdmin(obj) {
    return ApiAdmin().post("api/users/AdminSingIn", obj);
  },

  checkEmail(email) {
    return ApiAdmin().get("api/users/checkEmail/" + email);
  },

  getAllMember() {
    return ApiAdmin().get("api/users/getAllUser");
  },

  updateMember(obj) {
    return ApiAdmin().patch("api/users/updateUser", obj);
  },

  updatePriceMember(obj) {
    return ApiAdmin().patch("api/users/updateMoney", obj);
  },

  deleteMember(id) {
    return ApiAdmin().delete("api/users/deleteUserById/" + id);
  },

  verifiedUser(obj) {
    return ApiAdmin().post("api/users/verifiedUser", obj);
  },

  getListAgency() {
    return ApiAdmin().get("api/users/getAgency");
  },

  viewMemberAgency(id) {
    return ApiAdmin().get("api/users/viewTotalMAgency/" + id);
  },

  addMoneyMember(obj) {
    return ApiAdmin().post("api/users/addMoneyMember", obj);
  },

  getRateCommission() {
    return ApiAdmin().get("api/setup/getRateCommission");
  },

  saveRateCommission(obj) {
    return ApiAdmin().post("api/setup/saveRateCommission", obj);
  },

  // saveRateCommission(obj) {
  //   return ApiAdmin().post("api/setup/saveRateCommission", obj);
  // },

  //==========

  //================
  //================
  //================
  //========== TRADE
  //================
  //================
  //================

  getAddMoneyListHistory() {
    return ApiAdmin().get("api/trades/historyAllAddMoney");
  },

  getTotalAddMoney() {
    return ApiAdmin().get("api/trades/totalAddMoney");
  },

  getTradeListHistory() {
    return ApiAdmin().get("api/trades/historyAll");
  },

  gethistoryAllTrash() {
    return ApiAdmin().get("api/trades/historyAllTrash");
  },

  deleteTrashByID(obj) {
    return ApiAdmin().patch("api/trades/deleteTradeHisById", obj);
  },

  acceptDepositById(obj) {
    return ApiAdmin().post("api/trades/accept-deposit", obj);
  },

  getDepositListHistory() {
    return ApiAdmin().get("api/trades/hisDepositAll");
  },

  getDepositAllTrash() {
    return ApiAdmin().get("api/trades/hisDepositAllTrash");
  },

  getWithdrawalListHistory() {
    return ApiAdmin().get("api/trades/hisWithDrawalAll");
  },

  doneWithDrawalByID(obj) {
    return ApiAdmin().post("api/trades/doneWithdrawal", obj);
  },

  doneRefuseWithDrawalByID(obj) {
    return ApiAdmin().post("api/trades/doneRefuseWithdrawal", obj);
  },

  getListF1F7(obj) {
    return ApiAdmin().post("api/users/getListF1F7", obj);
  },

  getLisCommissionSearch(obj) {
    return ApiAdmin().post("api/users/getListCmsHis", obj);
  },

  //================
  //================
  //================
  //================
  //================

  //================
  //================
  //================
  //========== Analytics
  //================
  //================
  //================

  getAnalytics() {
    return ApiAdmin().get("api/users/analytics");
  },

  //================
  //================
  //================
  //========== Analytics
  //================
  //================
  //================

  //================
  //================
  //================
  //========== BET
  //================
  //================
  //================

  getBetsListHistory() {
    return ApiAdmin().get("api/bets/historyBet");
  },

  getBetsListHisTrash() {
    return ApiAdmin().get("api/bets/hisBetTrash");
  },

  deleteBetsTrash(obj) {
    return ApiAdmin().patch("api/bets/deleteBet", obj);
  },

  //================
  //================
  //================
  //================
  //================

  //================
  //================
  //================
  //========== EXCHANGE
  //================
  //================
  //================

  getExListHistory() {
    return ApiAdmin().get("api/exs/historyEx");
  },

  getExListHisTrash() {
    return ApiAdmin().get("api/exs/historyExTrash");
  },

  deleteExTrash(obj) {
    return ApiAdmin().patch("api/exs/deleteEx", obj);
  },

  //================
  //================
  //================
  //================
  //================

  uploadAvatar(obj) {
    return Api().post("api/auth/avatar", obj);
  },

  uploadPassportFront(obj) {
    return Api().post("api/auth/passport/front", obj);
  },

  uploadPassportBack(obj) {
    return Api().post("api/auth/passport/back", obj);
  },
};

// AuthenticationService.register({
//         email: 'testing@gmail.com',
//         password: '123456'
// })
