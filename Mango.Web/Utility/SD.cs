namespace Mango.Web.Utility
{
    public class SD
    {
        public static string CouponAPIBase { get; set; }
        public static string ProductAPIBase { get; set; }
        public static string AuthAPIBase { get; set; }
        public static string ShoppingCartAPIBase { get; set; }
        public static string OrderAPIBase { get; set; }
        public const string RoleAdmin = "ADMIN";
        public const string RoleCustomer = "CUSTOMER";
        public const string TokenCookie = "JWTToken";
        public enum ApiType
        {
            GET,
            POST,
            PUT,
            DELETE
        }

        public const string Status_Pending = "Đang chờ";
        public const string Status_Approved = "Xác nhận";
        public const string Status_ReadyForPickup = "Đang giao";
        public const string Status_Completed = "Hoàn thành";
        public const string Status_Refunded = "Trả hàng";
        public const string Status_Cancelled = "Hủy đơn";

        public enum ContentType
        {
            Json,
            MultipartFormData,
        }
    }
}
