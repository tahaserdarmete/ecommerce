import { StyleSheet } from 'react-native';
import AppColors from './appColor';
import { screenHeight, screenWidth } from './dimensions';

const AppStyles = StyleSheet.create({
  // Global Styles
  container: {
    flex: 1,
    backgroundColor: AppColors.backgroundLight,
  },

  centerContainer: {
    alignItems: 'center',
    padding: 20,
  },

  errorText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: AppColors.error,
    marginBottom: 12,
  },

  retryButton: {
    backgroundColor: AppColors.primary,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 15,
  },

  retryText: {
    color: AppColors.white,
    fontSize: 14,
    fontWeight: '600',
  },

  wrapper: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  rowBetween: {
    justifyContent: 'space-between',
  },

  rowAround: {
    justifyContent: 'space-around',
  },

  rowCenter: {
    justifyContent: 'center',
  },

  textCenter: {
    textAlign: 'center',
  },

  title: {
    fontSize: 20,
    fontWeight: 700,
    color: AppColors.textPrimary,
  },

  subtitle: {
    fontSize: 16,
    color: AppColors.textSecondary,
    marginTop: 4,
  },

  //   Header

  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 13,
  },

  icon: {
    position: 'relative',
  },

  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: AppColors.notificationDot,
    width: 15,
    height: 15,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },

  badgeText: {
    fontSize: 12,
    color: AppColors.white,
    fontWeight: 500,
  },

  // Banner
  bannerCard: {
    backgroundColor: AppColors.lightGray,
    borderRadius: 20,
    paddingHorizontal: 16,
    height: 140,
    marginHorizontal: 10,
    marginVertical: 15,
  },

  bannerTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  bannerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: AppColors.textPrimary,
  },

  bannerSubtitle: {
    fontSize: 13,
    color: AppColors.textSecondary,
    marginTop: 4,
  },

  bannerImage: {
    width: 90,
    height: 90,
    borderRadius: 10,
    resizeMode: 'contain',
    marginLeft: 12,
  },

  // Products Top
  productsTop: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },

  productsTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: AppColors.textPrimary,
  },

  button: {
    color: AppColors.link,
    fontSize: 15,
    fontWeight: '600',
  },

  // Products Wrapper
  productsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  productCard: {
    backgroundColor: AppColors.white,
    padding: 12,
    width: '48%',
    shadowColor: AppColors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    marginBottom: 12,
    borderRadius: 16,
    elevation: 4,
    position: 'relative',
  },

  productImage: {
    width: '100%',
    height: 140,
    marginBottom: 12,
  },

  favoriteIcon: {
    position: 'absolute',
    backgroundColor: AppColors.textPrimary + '66',
    padding: 9,
    borderRadius: 20,
    top: 12,
    right: 12,
  },

  productTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: AppColors.textPrimary,
  },

  productBrand: {
    fontSize: 12,
    color: AppColors.textSecondary,
    marginVertical: 4,
  },

  productPrice: {
    fontSize: 14,
    fontWeight: '600',
    color: AppColors.textPrimary,
  },

  // Product Detail
  detailHeader: {
    paddingHorizontal: 25,
    paddingVertical: 10,
  },

  backIcon: {
    fontWeight: '700',
  },

  detailHeaderTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: AppColors.textPrimary,
  },

  detailImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: -40,
  },

  detailCard: {
    backgroundColor: AppColors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    marginTop: -20,
    marginTop: -20,
    shadowColor: AppColors.black,
    shadowOffset: { width: 10, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    height: '100%',
  },

  productTop: {
    paddingVertical: 15,
    gap: 15,
  },

  productDetailTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: AppColors.textPrimary,
  },

  buttonsWrapper: {
    gap: 5,
    backgroundColor: AppColors.textSecondary + '77',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },

  ratingContainer: {
    marginBottom: 15,
  },

  reviews: {
    fontWeight: 'bold',
    fontSize: 15,
  },

  reviewsCount: {
    color: AppColors.textSecondary,
    fontWeight: 'bold',
    marginLeft: 10,
  },

  stock: {
    fontSize: 15,
    fontWeight: 'bold',
  },

  colorsWrapper: {
    gap: 10,
    marginBottom: 10,
  },

  colorCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: AppColors.white,
  },

  descriptionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
    color: AppColors.textPrimary,
  },

  descriptionText: {
    fontSize: 15,
    lineHeight: 25,
    color: AppColors.textPrimary,
    marginBottom: 18,
  },

  detailBottom: {
    gap: 16,
    justifyContent: 'space-between',
    marginTop: 20,
  },

  productCart: {
    backgroundColor: AppColors.link,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
  },

  productCartText: {
    color: AppColors.white,
    fontWeight: '600',
    fontSize: 17,
  },

  productDetailPrice: {
    fontSize: 25,
    fontWeight: 'bold',
  },

  // Cart
  cartHeader: {
    paddingTop: 12,
    paddingHorizontal: 20,
  },

  cartHeaderTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: AppColors.textPrimary,
  },

  emptyWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 30,
    padding: 20,
    borderRadius: 30,
    marginHorizontal: 10,
    marginVertical: 20,
  },

  emptyTitle: {
    fontSize: 35,
    textAlign: 'center',
    fontWeight: '600',
  },

  emptyDescription: {
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
  },

  emptyButton: {
    backgroundColor: AppColors.link,
    padding: 10,
    textAlign: 'center',
    borderRadius: 10,
  },

  emptyButtonText: {
    fontSize: 17,
    color: AppColors.white,
    fontWeight: '500',
  },

  cartItem: {
    margin: screenWidth * 0.03,
    backgroundColor: AppColors.white,
    shadowColor: AppColors.black,
    shadowRadius: 3,
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 0 },
    borderRadius: 10,
    borderWidth: 1,
    borderColor: AppColors.lightGray,
    paddingHorizontal: screenWidth * 0.03,
    paddingVertical: screenHeight * 0.01,
    position: 'relative',
  },

  cartImg: {
    width: screenWidth * 0.2,
    height: screenHeight * 0.1,
  },

  seperator: {
    flex: 1 / 2,
  },

  cartInfoContainer: {
    flex: 3,
  },

  cartInfoText: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: screenHeight * 0.01,
  },

  cartInfoCategory: {
    backgroundColor: AppColors.success,
    marginRight: 'auto',
    paddingHorizontal: 3,
    paddingVertical: 1,
    borderRadius: 2,
    color: AppColors.white,
    fontWeight: '500',
  },

  capitalize: {
    textTransform: 'capitalize',
  },

  decreaseQuantity: {
    padding: 3,
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },

  increaseQuantity: {
    padding: 3,
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },

  btnContainer: {
    gap: 10,
    backgroundColor: AppColors.lightGray,
    borderRadius: 20,
  },

  cartControls: {
    paddingVertical: screenHeight * 0.01,
    position: 'static',
  },

  cartItemPrice: {
    fontWeight: '700',
    fontSize: 16,
  },

  orderComplate: {
    flex: 1,
    backgroundColor: 'white',
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: AppColors.lightGray,
    padding: 10,
  },

  complateOrder: {
    backgroundColor: AppColors.primary,
    height: screenHeight * 0.05,
    marginVertical: 'auto',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  complateOrderText: {
    fontSize: 18,
    fontWeight: '700',
    color: AppColors.white,
  },

  trashBtn: {
    position: 'absolute',
    bottom: '50%',
    right: 0,
  },
});

export default AppStyles;
