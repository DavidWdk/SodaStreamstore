import colors from "./colors";

export default {
  colors,
  botSpacing: {
    marginBottom: 8,
  },
  botSpacing16: {
    marginBottom: 16,
  },
  blueSection: {
    backgroundColor: colors.blueBackground,
    paddingVertical: 24,
    paddingHorizontal: 8,
  },
  blueBackground: {
    backgroundColor: colors.blueBackground,
  },
  boldText: {
    fontWeight: "bold",
    color: colors.black,
    fontSize: 16,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    paddingTop: 12,
  },
  icon: {
    marginRight: 8,
    marginTop: 4,
  },
  lineWhitespace: {
    marginTop: 8,
  },
  row: {
    flexDirection: "row",
  },
  screenContainer: {
    paddingHorizontal: 8,
  },
  section: {
    paddingBottom: 24,
  },
  shadowBlock: {
    backgroundColor: colors.white,
    padding: 16,
    elevation: 8,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 6,
    shadowOpacity: 0.15,
  },
  subtitle: {
    color: colors.black,
    fontSize: 18,
    // fontWeight: "bold",
  },
  text: {
    color: colors.black,
    fontSize: 16,
  },
  textCenter: {
    textAlign: "center",
  },
  title: {
    color: colors.black,
    fontSize: 24,
    fontWeight: "600",
  },
  topWhitespace: {
    paddingTop: 32,
  },
  topWhitespaceSmaller: {
    paddingTop: 24,
  },
  topWhitespaceSmallest: {
    paddingTop: 16,
  },
  topWhitespaceMini: {
    paddingTop: 8,
  },
  topWhitespaceLinePadding: {
    paddingTop: 3,
  },
};
