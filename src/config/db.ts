import { PrismaClient } from "../../generated/prisma/index.js";
import axios from "axios";

const prisma = new PrismaClient();

export const connectDB = async () => {
  try {
    await prisma.$connect();
    return {
      success: true,
      message: "Successfully connected to MySQL Database",
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to connect to Database",
      error: error instanceof Error ? error.message : error,
    };
  }
};

export const seedProjectsData = async () => {
  try {
    const projects = [
      { projectCode: "ME/P/AMD/03", department: "Mechanical Engineering" },
      { projectCode: "CEE/P/PM/09", department: "Centre for Energy" },
      {
        projectCode: "CET/P/RB/02",
        department: "Centre for Educational Technology",
      },
      {
        projectCode: "CSE/P/SAB/2",
        department: "Computer Science and Engineering",
      },
      {
        projectCode: "EEE-CSE/P/PG/1",
        department: "Computer Science and Engineering",
      },
      {
        projectCode: "xCSESPNxDIT00804xSRS003",
        department: "Computer Science and Engineering",
      },
      {
        projectCode: "HSS/P/SM/3",
        department: "Electronics and Electrical Engineering",
      },
      {
        projectCode: "xCETSPNMHRD93022xHOA001",
        department: "Centre for Educational Technology",
      },
      {
        projectCode: "CLSTSPNMHRD00510SRMP010",
        department: "Centre for Linguistic Science and Technology",
      },
      {
        projectCode: "CET/P/HOC/2",
        department: "Centre for Educational Technology",
      },
      { projectCode: "BT/P/BA/6", department: "Biosciences & Bioengineering" },
      {
        projectCode: "CSE/P/GB/1",
        department: "Center for Computer and Communication",
      },
      {
        projectCode: "xxCCSPNIITG90023xHOC001",
        department: "Center for Computer and Communication",
      },
      { projectCode: "xDESSPNMHRD90008xHOD001", department: "Design" },
      {
        projectCode: "xCEESPNMHRD00760xVVG009",
        department: "Centre for Energy",
      },
      {
        projectCode: "xENVSPNxDST00504xxKP007",
        department: "Center for Environment",
      },
      {
        projectCode: "xCEESPNxDBT00760xVVG007",
        department: "Centre for Energy",
      },
      {
        projectCode: "xxCESPNxBBG00270xAKS008",
        department: "Civil Engineering",
      },
      { projectCode: "CE/P/AKS/8", department: "Civil Engineering" },
      { projectCode: "CLE/C/GP/4", department: "Chemical Engineering" },
      { projectCode: "BT/P/LS/13", department: "Biosciences & Bioengineering" },
      {
        projectCode: "xCETSPNMHRD00378xxRB002",
        department: "Centre for Educational Technology",
      },
      { projectCode: "ME/P/AMD/3", department: "Mechanical Engineering" },
      { projectCode: "DES/P/HOD/1", department: "Design" },
      { projectCode: "xDESSPNxPNG00821xxKS008", department: "Design" },
      { projectCode: "xDESSPNMHRD00821xxKS009", department: "Design" },
      {
        projectCode: "xCETSPNMHRD90022xHOC004",
        department: "Centre for Educational Technology",
      },
      {
        projectCode: "NANOSPNxDIT00041xxAC011",
        department: "Centre for Nanotechnology",
      },
      {
        projectCode: "xCSESPNxDIT00728xSAB002",
        department: "Computer Science and Engineering",
      },
      { projectCode: "xPHYSPNSERB00411xxSB004", department: "Physics" },
      { projectCode: "xCHMSPNxDST00879xSCP004", department: "Chemistry" },
      {
        projectCode: "xEEESPNxDIT00507xRPP005",
        department: "Electronics and Electrical Engineering",
      },
      {
        projectCode: "xCLESPNSERB01011xNRP002",
        department: "Chemical Engineering",
      },
      {
        projectCode: "xxCESPNxDST00415xxSD008",
        department: "Civil Engineering",
      },
      {
        projectCode: "xHSSSPNxDIT00675xxSM003",
        department: "Humanities and Social Sciences",
      },
      {
        projectCode: "xxMESPNxDST00155xUSD006",
        department: "Mechanical Engineering",
      },
      { projectCode: "xPHYSPNSERB00511xxPP003", department: "Physics" },
      {
        projectCode: "xCLESPNxDST01011xNRP003",
        department: "Chemical Engineering",
      },
      {
        projectCode: "xCSESPNONGC01005xRDB002",
        department: "Computer Science and Engineering",
      },
      {
        projectCode: "xCLECNLHURC0985xxSS002",
        department: "Chemical Engineering",
      },
      {
        projectCode: "xCLESPNxDBT00760xVVG008",
        department: "Chemical Engineering",
      },
      {
        projectCode: "BSBESPNxDBT00391xxLS010",
        department: "Biosciences & Bioengineering",
      },
      {
        projectCode: "BSBESPNxDBT00399xSSG007",
        department: "Biosciences & Bioengineering",
      },
      {
        projectCode: "xxMESPNBRNS00817xAMD003",
        department: "Mechanical Engineering",
      },
      {
        projectCode: "NANOSPNxDIT00041xxAC011",
        department: "Centre for Nanotechnology",
      },
      {
        projectCode: "xCEESPNxDST00985xxSS005",
        department: "Centre for Energy",
      },
      {
        projectCode: "BSBESPNxDBT00861xxSS002",
        department: "Biosciences & Bioengineering",
      },
      {
        projectCode: "xENVSPNxDBT00534xxUB010",
        department: "Center for Environment",
      },
      { projectCode: "xDESCNLxMOT01081xPCK001", department: "Design" },
      {
        projectCode: "xxMESPNBRNS00817xAMD003",
        department: "Mechanical Engineering",
      },
      {
        projectCode: "xCEESPNSERB00871xSKN002",
        department: "Centre for Energy",
      },
      {
        projectCode: "BSBESPNxDBT00391xxLS011",
        department: "Biosciences & Bioengineering",
      },
      {
        projectCode: "NANOSPNDEIY00041xxAC011",
        department: "Centre for Nanotechnology",
      },
      {
        projectCode: "BSBESPNxDBT00789xxVT006",
        department: "Biosciences & Bioengineering",
      },
      {
        projectCode: "xxCESPNSERB01136xxRK002",
        department: "Civil Engineering",
      },
      {
        projectCode: "xCLECNLxxGI00829xRKU001",
        department: "Chemical Engineering",
      },
      {
        projectCode: "xCLECNLxxMoc00426xxBM001",
        department: "Chemical Engineering",
      },
      { projectCode: "xCHMSPNxDST00879xSCP004", department: "Chemistry" },
      {
        projectCode: "xCLECNLxHUR00985xxSS002",
        department: "Chemical Engineering",
      },
      {
        projectCode: "BSBESPNxDBT01128xRPT003",
        department: "Biosciences & Bioengineering",
      },
      {
        projectCode: "xEEESPNISRO00883xxGT003",
        department: "Electronics and Electrical Engineering",
      },
      {
        projectCode: "xCLESPNMHRD00985xxSS006",
        department: "Chemical Engineering",
      },
      {
        projectCode: "xCEESPNMHRD00760xVVG009",
        department: "Centre for Energy",
      },
      {
        projectCode: "xCLESPNxDST00829xRKU005",
        department: "Chemical Engineering",
      },
      {
        projectCode: "xCLESPNxDBT00760xVVG008",
        department: "Chemical Engineering",
      },
      {
        projectCode: "xMESPNxDST00974xSSG002",
        department: "Mechanical Engineering",
      },
      { projectCode: "xCHMSPNxDBT00772xxDM006", department: "Chemistry" },
      { projectCode: "xDESCNLxMOTO01081xPCK001", department: "Design" },
      {
        projectCode: "xxMESPNxDST00897xMRS003",
        department: "Mechanical Engineering",
      },
      {
        projectCode: "xxMESPNxxDBT00709xSKJ009",
        department: "Mechanical Engineering",
      },
      {
        projectCode: "xxMESPNSERB00709xSKJ006",
        department: "Mechanical Engineering",
      },
      {
        projectCode: "xxCESPNSERB00367xxGB003",
        department: "Civil Engineering",
      },
      {
        projectCode: "xxCESPNISRO1140cRIB002",
        department: "Civil Engineering",
      },
      {
        projectCode: "BSBESPNxDBT00391xxLS015",
        department: "Biosciences & Bioengineering",
      },
      {
        projectCode: "BSBESPNxDBT00391xxLS014",
        department: "Biosciences & Bioengineering",
      },
      {
        projectCode: "BSBESPNxDBT00391xxLS013",
        department: "Biosciences & Bioengineering",
      },
      {
        projectCode: "xCLESPNxDBT00760xVVG006",
        department: "Chemical Engineering",
      },
      { projectCode: "CLE-P-NRP-02", department: "Chemical Engineering" },
      { projectCode: "xPHYSPNMHRD00035xxAK008", department: "Physics" },
      {
        projectCode: "xCLECNLxxGI00829xRKU001",
        department: "Chemical Engineering",
      },
      {
        projectCode: "xENVSPNxDST00619xxKM005",
        department: "Center for Environment",
      },
      {
        projectCode: "xxCESPNISRO1140cRIB002",
        department: "Civil Engineering",
      },
      {
        projectCode: "xCLESPNxDBT00760xVVG006",
        department: "Chemical Engineering",
      },
      {
        projectCode: "BSBESPNSERB00811xxBA008",
        department: "Biosciences & Bioengineering",
      },
      {
        projectCode: "BSBESPNxDBT00857xBBM011",
        department: "Biosciences & Bioengineering",
      },
      {
        projectCode: "xHSSSPNxDIT00874xPRS002",
        department: "Humanities and Social Sciences",
      },
      {
        projectCode: "xCHMSPNSERB00853xxSD002",
        department: "Chemical Engineering",
      },
      {
        projectCode: "xCLESPNMHRD00985xxSS006",
        department: "Chemical Engineering",
      },
      {
        projectCode: "BSBESPNSERB00993xLMP003",
        department: "Biosciences & Bioengineering",
      },
      {
        projectCode: "xCEESPNxDST00985xxSS005",
        department: "Centre for Energy",
      },
      {
        projectCode: "BSBESPNxDBT00861xxSS002",
        department: "Biosciences & Bioengineering",
      },
      {
        projectCode: "xENVSPNxDBT00534xxUB010",
        department: "Center for Environment",
      },
      { projectCode: "xDESCNLxMOT01081xPCK001", department: "Design" },
      {
        projectCode: "xxMESPNBRNS00817xAMD003",
        department: "Mechanical Engineering",
      },
      {
        projectCode: "xCEESPNSERB00871xSKN002",
        department: "Centre for Energy",
      },
      {
        projectCode: "BSBESPNxDBT00391xxLS011",
        department: "Biosciences & Bioengineering",
      },
      {
        projectCode: "NANOSPNDEIY00041xxAC011",
        department: "Centre for Nanotechnology",
      },
      {
        projectCode: "BSBESPNxDBT00789xxVT006",
        department: "Biosciences & Bioengineering",
      },
      {
        projectCode: "xxCESPNSERB01136xxRK002",
        department: "Civil Engineering",
      },
      {
        projectCode: "xCLECNLxxGI00829xRKU001",
        department: "Chemical Engineering",
      },
      {
        projectCode: "xCLECNLxxMoc00426xxBM001",
        department: "Chemical Engineering",
      },
      { projectCode: "xCHMSPNxDST00879xSCP004", department: "Chemistry" },
      {
        projectCode: "xCLECNLxHUR00985xxSS002",
        department: "Chemical Engineering",
      },
      {
        projectCode: "BSBESPNxDBT01128xRPT003",
        department: "Biosciences & Bioengineering",
      },
      {
        projectCode: "xEEESPNISRO00883xxGT003",
        department: "Electronics and Electrical Engineering",
      },
      {
        projectCode: "xCLESPNMHRD00985xxSS006",
        department: "Chemical Engineering",
      },
      {
        projectCode: "xCEESPNMHRD00760xVVG009",
        department: "Centre for Energy",
      },
      {
        projectCode: "xCLESPNxDST00829xRKU005",
        department: "Chemical Engineering",
      },
      {
        projectCode: "xCLESPNxDBT00760xVVG008",
        department: "Chemical Engineering",
      },
      {
        projectCode: "xMESPNxDST00974xSSG002",
        department: "Mechanical Engineering",
      },
      { projectCode: "xCHMSPNxDBT00772xxDM006", department: "Chemistry" },
      {
        projectCode: "xRNDSPNxIITG90034DORD006",
        department: "Research and Development",
      },
      {
        projectCode: "IISIISPIITG90061DOII102",
        department: "Industrial Interactions and Special Initiatives",
      },
      {
        projectCode: "IISIISPxDBT90061D0II101",
        department: "Industrial Interactions and Special Initiatives",
      },
      {
        projectCode: "IITG/P/RP/01",
        department: "Industrial Interactions and Special Initiatives",
      },
      {
        projectCode: "xRNDSPNxDBT90034DORD005",
        department: "Research and Development",
      },
      {
        projectCode: "xCETSPNMHRD00378xxRB002",
        department: "Electronics and Electrical Engineering",
      },
      {
        projectCode: "CLSTSPNxDBT00510SRMP009",
        department: "Electronics and Electrical Engineering",
      },
      {
        projectCode: "CLSTSPNMHRD00510SRMP010",
        department: "Centre for Linguistic Science and Technology",
      },
      {
        projectCode: "BSBESPNxDBT00908xSPK005",
        department: "Biosciences & Bioengineering",
      },
      {
        projectCode: "BSBESPNxDBT00908xSPK006",
        department: "Biosciences & Bioengineering",
      },
      { projectCode: "xDESSPNxPNG00821xxKS008", department: "Design" },
      {
        projectCode: "CLSTSPNMHRD00510SRMP010",
        department: "Centre for Linguistic Science and Technology",
      },
      {
        projectCode: "xCEESPNxDST00307xxPM00900",
        department: "Centre for Energy",
      },
      {
        projectCode: "xHSSSPNCAST00594xxSS004",
        department: "Humanities and Social Sciences",
      },
      {
        projectCode: "BSBESPNxDBT00936xABK005",
        department: "Biosciences & Bioengineering",
      },
      {
        projectCode: "BSBESPNxDBT00936xABK006",
        department: "Biosciences & Bioengineering",
      },
      {
        projectCode: "xxCESPNxDST00671xHBK003",
        department: "Civil Engineering",
      },
      {
        projectCode: "NANOSPNxDIT00041xxAC011",
        department: "Centre for Nanotechnology",
      },
      {
        projectCode: "xCLESPNxDBT00619xxKM007",
        department: "Chemical Engineering",
      },
      {
        projectCode: "xxCESPNBRNS00955xMKG006",
        department: "Civil Engineering",
      },
      {
        projectCode: "xCEESPNMHRD00760xVVG009",
        department: "Centre for Energy",
      },
      { projectCode: "xCHMSPNSERB01111xKPB004", department: "Chemistry" },
      { projectCode: "xCHMSPNSERB00772xxDM007", department: "Chemistry" },
      { projectCode: "xPHYSPNMHRD00035xxAK008", department: "Physics" },
      {
        projectCode: "xCLECNLxxGI00829xRKU001",
        department: "Chemical Engineering",
      },
      {
        projectCode: "xENVSPNxDST00619xxKM005",
        department: "Center for Environment",
      },
      {
        projectCode: "xxCESPNISRO1140cRIB002",
        department: "Civil Engineering",
      },
      {
        projectCode: "xCLESPNxDBT00760xVVG006",
        department: "Chemical Engineering",
      },
      {
        projectCode: "BSBESPNSERB00811xxBA008",
        department: "Biosciences & Bioengineering",
      },
      {
        projectCode: "BSBESPNxDBT00857xBBM011",
        department: "Biosciences & Bioengineering",
      },
      {
        projectCode: "xHSSSPNxDIT00874xPRS002",
        department: "Humanities and Social Sciences",
      },
      {
        projectCode: "xCHMSPNSERB00853xxSD002",
        department: "Chemical Engineering",
      },
      {
        projectCode: "xCLESPNMHRD00985xxSS006",
        department: "Chemical Engineering",
      },
      {
        projectCode: "BSBESPNSERB00993xLMP003",
        department: "Biosciences & Bioengineering",
      },
      {
        projectCode: "xCEESPNxDST00985xxSS005",
        department: "Centre for Energy",
      },
      {
        projectCode: "BSBESPNxDBT00861xxSS002",
        department: "Biosciences & Bioengineering",
      },
      {
        projectCode: "xENVSPNxDBT00534xxUB010",
        department: "Center for Environment",
      },
      { projectCode: "xDESCNLxMOT01081xPCK001", department: "Design" },
      {
        projectCode: "xxMESPNBRNS00817xAMD003",
        department: "Mechanical Engineering",
      },
      {
        projectCode: "xCEESPNSERB00871xSKN002",
        department: "Centre for Energy",
      },
      {
        projectCode: "BSBESPNxDBT00391xxLS011",
        department: "Biosciences & Bioengineering",
      },
      {
        projectCode: "NANOSPNDEIY00041xxAC011",
        department: "Centre for Nanotechnology",
      },
      {
        projectCode: "BSBESPNxDBT00789xxVT006",
        department: "Biosciences & Bioengineering",
      },
      {
        projectCode: "xxCESPNSERB01136xxRK002",
        department: "Civil Engineering",
      },
      {
        projectCode: "xCLECNLxxGI00829xRKU001",
        department: "Chemical Engineering",
      },
      {
        projectCode: "xCLECNLxxMoc00426xxBM001",
        department: "Chemical Engineering",
      },
      { projectCode: "xCHMSPNxDST00879xSCP004", department: "Chemistry" },
      {
        projectCode: "xCLECNLxHUR00985xxSS002",
        department: "Chemical Engineering",
      },
      {
        projectCode: "BSBESPNxDBT01128xRPT003",
        department: "Biosciences & Bioengineering",
      },
      {
        projectCode: "xEEESPNISRO00883xxGT003",
        department: "Electronics and Electrical Engineering",
      },
      {
        projectCode: "xCLESPNMHRD00985xxSS006",
        department: "Chemical Engineering",
      },
      {
        projectCode: "xCEESPNMHRD00760xVVG009",
        department: "Centre for Energy",
      },
      {
        projectCode: "xCLESPNxDST00829xRKU005",
        department: "Chemical Engineering",
      },
      {
        projectCode: "xCLESPNxDBT00760xVVG008",
        department: "Chemical Engineering",
      },
      {
        projectCode: "xMESPNxDST00974xSSG002",
        department: "Mechanical Engineering",
      },
      { projectCode: "xCHMSPNxDBT00772xxDM006", department: "Chemistry" },
      {
        projectCode: "xCEECNLUNSD01144xxHC005",
        department: "Centre for Energy",
      },
      {
        projectCode: "IITGISPxDST00228xTIH101",
        department: "Centre for Intelligent Cyber-Physical Systems",
      },
      {
        projectCode: "xxCECNLNERI00054xxCM083",
        department: "Civil Engineering",
      },
      {
        projectCode: "BSBESPNxDBT00389xxPG007",
        department: "Biosciences & Bioengineering",
      },
      {
        projectCode: "CLSTSPNxDIT00030xxSN010",
        department: "Computer Science and Engineering",
      },
      {
        projectCode: "xCSESPNxDIT00030xxSN007",
        department: "Computer Science and Engineering",
      },
      {
        projectCode: "IITG/R&D/IDF/PS",
        department: "Research and Development",
      },
      {
        projectCode: "xCRTISPMOPR90057xHOC101",
        department: "Civil Engineering",
      },
      {
        projectCode: "xxCEISPAICT00532xSBG101",
        department: "Civil Engineering",
      },
      {
        projectCode: "CET-P-E&ICT-HOA-01",
        department: "Centre for Educational Technology",
      },
      {
        projectCode: "SARTICNxCPL90057HOSC001",
        department: "School of Agro and Rural Technology",
      },
      {
        projectCode: "xxCCISPIITG00694xxTO101",
        department: "Center for Computer and Communication",
      },
      {
        projectCode: "xHSSICNxxES00807xxAB012",
        department: "Humanities and Social Sciences",
      },
      {
        projectCode: "xRTCSPNxDST00296xxSK008",
        department: "Mechanical Engineering",
      },
      {
        projectCode: "CLEICNGAIL00426xxBM013",
        department: "Chemical Engineering",
      },
      {
        projectCode: "NANOISPISRO01122AKAS101",
        department: "Centre for Nanotechnology",
      },
      {
        projectCode: "NANOISPBIRA00771xxDB101",
        department: "Centre for Nanotechnology",
      },
      {
        projectCode: "xCETISPEICT00883xxGT104",
        department: "Centre for Educational Technology",
      },
      {
        projectCode: "xEEEISPxOIL01006xSHN101",
        department: "Electronics and Electrical Engineering",
      },
      {
        projectCode: "xCLEISPxNRL00985xxSS101",
        department: "Chemical Engineering",
      },
      {
        projectCode: "xCEEISPIITM00851xPRK101",
        department: "Centre for Energy",
      },
      { projectCode: "xPHYISPISRO00764xxDP101", department: "Physics" },
      {
        projectCode: "xxMEISPTATA00709xSKJ101",
        department: "Mechanical Engineering",
      },
      {
        projectCode: "xxMESPNDSIR00307xxPM011",
        department: "Mechanical Engineering",
      },
      {
        projectCode: "xCEEICNHPCL00584xPMk007",
        department: "Centre for Energy",
      },
      {
        projectCode: "NANOISPISRO01122AKAS101",
        department: "Centre for Nanotechnology",
      },
      {
        projectCode: "xxMEICNIBPL00709xSKJ003",
        department: "Mechanical Engineering",
      },
      {
        projectCode: "xEEEOETNSDC00883xxGT003",
        department: "Electronics and Electrical Engineering",
      },
      { projectCode: "xDESICNxHML00821xxKS015", department: "Design" },
      {
        projectCode: "xCEEISPBIOB00760xVVG101",
        department: "Centre for Energy",
      },
      {
        projectCode: "xCLEISPxDST00985xxSS104",
        department: "Chemical Engineering",
      },
      { projectCode: "NANOICNCHEM01122AKAS002", department: "Chemistry" },
      {
        projectCode: "SARTISPHDFC01195xxSS103",
        department: "School of Agro and Rural Technology",
      },
      {
        projectCode: "xRNDSPNIITG90034xIDF001",
        department: "Industrial Interactions and Special Initiatives",
      },
      {
        projectCode: "xxCEICNSONY00415xxSD028",
        department: "Civil Engineering",
      },
      { projectCode: "NANOICNCHEM01122AKAS002", department: "Chemistry" },
      { projectCode: "xDESICNCFMS00821xxKS014", department: "Design" },
      {
        projectCode: "xCLEISPUIPL00985xxSS103",
        department: "Chemical Engineering",
      },
      {
        projectCode: "xCEEISPBIOB00760xVVG101",
        department: "Centre for Energy",
      },
      {
        projectCode: "xCLEISPxNRL00985xxSS101",
        department: "Chemical Engineering",
      },
      {
        projectCode: "NANOICNxOIL01106xxKR001",
        department: "Centre for Nanotechnology",
      },
      {
        projectCode: "xCETISPEICT00883xxGT104",
        department: "Centre for Educational Technology",
      },
      {
        projectCode: "xEEEISPINTE00883xxGT102",
        department: "Electronics and Electrical Engineering",
      },
      {
        projectCode: "CLSTICNxGHC00804xSRS001",
        department: "Centre for Linguistic Science and Technology",
      },
      {
        projectCode: "NANOISPISRO01122AKAS101B",
        department: "Centre for Nanotechnology",
      },
      {
        projectCode: "SARTISPxDST00296xxSK103",
        department: "School of Agro and Rural Technology",
      },
      {
        projectCode: "xCHMISPxDBT00540xxGK101",
        department: "Industrial Interactions and Special Initiatives",
      },
      {
        projectCode: "xCHMISPxDBT00540xxGK102",
        department: "Industrial Interactions and Special Initiatives",
      },
      {
        projectCode: "IITGSPNMHRD90034xxRP001",
        department: "Industrial Interactions and Special Initiatives",
      },
      {
        projectCode: "ECF-NECBH",
        department: "Industrial Interactions and Special Initiatives",
      },
      {
        projectCode: "IDF",
        department: "Industrial Interactions and Special Initiatives",
      },
      { projectCode: "xPHYISPISRO00982xxGK101", department: "Physics" },
      {
        projectCode: "xCLEICNEKAT00851xPRK001",
        department: "Chemical Engineering",
      },
      {
        projectCode: "xCLEICNGAIL00426xxBM013",
        department: "Chemical Engineering",
      },
      {
        projectCode: "CLEISPSKAN00985xxSS102",
        department: "Chemical Engineering",
      },
      {
        projectCode: "BSBEICNAKAY00936xABK002",
        department: "Biosciences & Bioengineering",
      },
    ];

    await prisma.project.createMany({
      data: projects,
      skipDuplicates: true,
    });

    console.log(`✅ Seeded ${projects.length} projects successfully`);
    return {
      success: true,
      message: `Projects seeded successfully`,
      count: projects.length,
    };
  } catch (error) {
    console.error("❌ Error seeding projects:", error);
    return {
      success: false,
      message: "Failed to seed projects",
      error: error instanceof Error ? error.message : error,
    };
  }
};

export const syncUsersFromAPI = async () => {
  try {
    const apiUrl = process.env.USER_SYNC_API_URL!;
    console.log(`🔄 Fetching users from: ${apiUrl}`);

    const response = await axios.get(apiUrl, {
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "AttendanceApp-Backend/1.0.0",
      },
    });

    if (!response.data || !Array.isArray(response.data)) {
      throw new Error("Invalid API response format");
    }

    const users = response.data;
    console.log(`📥 Received ${users.length} users from API`);

    const syncResults = {
      created: 0,
      updated: 0,
      errors: 0,
      userProjectsCreated: 0,
    };

    for (const userData of users) {
      try {
        if (
          !userData.employeeId ||
          !userData.username ||
          !userData.projectKey
        ) {
          console.warn("⚠️ Skipping user with missing data:", userData);
          syncResults.errors++;
          continue;
        }

        // Check if user exists (using employeeNumber as the field name)
        const existingUser = await prisma.user.findUnique({
          where: { employeeNumber: userData.employeeId }, // Map employeeId to employeeNumber
        });

        if (!existingUser) {
          // Create new user
          await prisma.user.create({
            data: {
              employeeNumber: userData.employeeId, // Map employeeId to employeeNumber
              username: userData.username,
              empClass: userData.empClass || "PJ", // Use empClass from API or default to "PJ"
            },
          });
          syncResults.created++;
        } else {
          // Update user if any data has changed
          const needsUpdate = 
            existingUser.username !== userData.username ||
            existingUser.empClass !== (userData.empClass || "PJ");

          if (needsUpdate) {
            await prisma.user.update({
              where: { employeeNumber: userData.employeeId },
              data: {
                username: userData.username,
                empClass: userData.empClass || "PJ",
              },
            });
            syncResults.updated++;
          }
        }

        // Check if project exists (using projectCode as the field name)
        const projectExists = await prisma.project.findUnique({
          where: { projectCode: userData.projectKey }, // Map projectKey to projectCode
        });

        if (!projectExists) {
          console.warn(
            `⚠️ Project ${userData.projectKey} not found for user ${userData.username}`
          );
          continue;
        }

        // Check if user-project relation exists
        const relationExists = await prisma.userProjectRelation.findUnique({
          where: {
            employeeNumber_projectCode: {
              employeeNumber: userData.employeeId, // Map employeeId to employeeNumber
              projectCode: userData.projectKey, // Map projectKey to projectCode
            },
          },
        });

        if (!relationExists) {
          // Create user-project relation
          await prisma.userProjectRelation.create({
            data: {
              employeeNumber: userData.employeeId, // Map employeeId to employeeNumber
              projectCode: userData.projectKey, // Map projectKey to projectCode
            },
          });
          syncResults.userProjectsCreated++;
        }
      } catch (userError) {
        console.error(
          `❌ Error processing user ${userData.username}:`,
          userError
        );
        syncResults.errors++;
      }
    }

    console.log("✅ User sync completed:", syncResults);
    return {
      success: true,
      message: "Users synced successfully",
      results: syncResults,
    };
  } catch (error) {
    console.error("❌ Error syncing users from API:", error);
    return {
      success: false,
      message: "Failed to sync users from API",
      error: error instanceof Error ? error.message : error,
    };
  }
};

export const seedBasicCalendar = async () => {
  try {
    const currentYear = new Date().getFullYear();
    const weekendDates = [];

    // Generate all weekend dates for the current year
    for (let month = 0; month < 12; month++) {
      const daysInMonth = new Date(currentYear, month + 1, 0).getDate();

      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(Date.UTC(currentYear, month, day, 12));
        const dayOfWeek = date.getDay();

        // Check if weekend (Saturday = 6, Sunday = 0)
        if (dayOfWeek === 0 || dayOfWeek === 6) {
          weekendDates.push({
            date: date,
            description: dayOfWeek === 0 ? "Sunday" : "Saturday",
            isHoliday: true,
            isWeekend: true,
          });
        }
      }
    }

    await prisma.calendar.createMany({
      data: weekendDates,
      skipDuplicates: true,
    });

    console.log(
      `✅ Seeded ${weekendDates.length} weekend dates for ${currentYear}`
    );
    return {
      success: true,
      message: `Basic calendar seeded for ${currentYear}`,
      count: weekendDates.length,
    };
  } catch (error) {
    console.error("❌ Error seeding basic calendar:", error);
    return {
      success: false,
      message: "Failed to seed basic calendar",
      error: error instanceof Error ? error.message : error,
    };
  }
};

// UPDATED: seedPIData function
export const seedPIData = async () => {
  try {
    // Create PI users - username is now the primary key
    const piData = [
      { username: "PIUser1", password: "123456", projectCode: "J4E89B2F" },
      { username: "PIUser2", password: "123456", projectCode: "A9F41C3E" },
      { username: "PIUser3", password: "123456", projectCode: "D8A94E2C" },
    ];

    // Create PIs
    await prisma.pI.createMany({
      data: piData,
      skipDuplicates: true,
    });

    console.log(`✅ Seeded ${piData.length} PIs successfully`);

    // Define PI project assignments
    const piProjectAssignments = [
      {
        username: "PIUser1",
        projects: ["J4E89B2F", "H9A53C7D", "G2D71E5A", "F6C28A4B"],
      },
      { username: "PIUser2", projects: ["A9F41C3E", "B7E82A9D", "C3D15F6B"] },
      { username: "PIUser3", projects: ["D8A94E2C", "E1B37D9F", "K7D12F6A"] },
    ];

    // Create PI-Project relations using username directly
    const piProjectRelations = [];
    for (const assignment of piProjectAssignments) {
      for (const projectCode of assignment.projects) {
        if (projectCode) {
          piProjectRelations.push({
            username: assignment.username,
            projectCode: projectCode,
          });
        }
      }
    }

    // Create all relations
    if (piProjectRelations.length > 0) {
      await prisma.pIProjectRelation.createMany({
        data: piProjectRelations,
        skipDuplicates: true,
      });

      console.log(
        `✅ Created ${piProjectRelations.length} PI-Project relations successfully`
      );
    }

    // Log distribution
    console.log("PI-Project Distribution:");
    piProjectAssignments.forEach((assignment) => {
      console.log(
        `  - ${assignment.username}: ${
          assignment.projects.length
        } projects (${assignment.projects.join(", ")})`
      );
    });

    return {
      success: true,
      message: `PIs and relations seeded successfully`,
      count: piData.length,
    };
  } catch (error) {
    console.error("❌ Error seeding PIs:", error);
    return {
      success: false,
      message: "Failed to seed PIs",
      error: error instanceof Error ? error.message : error,
    };
  }
};

export const addHoliday = async (date: Date, description: string) => {
  try {
    const existingCalendar = await prisma.calendar.findUnique({
      where: { date },
    });

    if (existingCalendar) {
      await prisma.calendar.update({
        where: { date },
        data: {
          description,
          isHoliday: true,
        },
      });
    } else {
      await prisma.calendar.create({
        data: {
          date,
          description,
          isHoliday: true,
          isWeekend: false,
        },
      });
    }

    return {
      success: true,
      message: `Holiday added: ${description} on ${date.toDateString()}`,
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to add holiday",
      error: error instanceof Error ? error.message : error,
    };
  }
};

export const initializeDatabase = async () => {
  try {
    console.log("🚀 Initializing database...");

    // Connect to database
    const connection = await connectDB();
    if (!connection.success) {
      throw new Error(connection.message);
    }

    // Seed projects
    await seedProjectsData();

    // Seed calendar
    await seedBasicCalendar();

    // Sync users from API
    await syncUsersFromAPI();

    console.log("✅ Database initialization completed successfully");
    return {
      success: true,
      message: "Database initialized successfully",
    };
  } catch (error) {
    console.error("❌ Database initialization failed:", error);
    return {
      success: false,
      message: "Database initialization failed",
      error: error instanceof Error ? error.message : error,
    };
  }
};

export const getDatabaseStats = async () => {
  try {
    const [userCount, projectCount, attendanceCount, holidayCount, piCount] =
      await Promise.all([
        prisma.user.count(),
        prisma.project.count(),
        prisma.attendance.count(),
        prisma.calendar.count({ where: { isHoliday: true } }),
        prisma.pI.count(),
      ]);

    return {
      success: true,
      stats: {
        users: userCount,
        projects: projectCount,
        attendances: attendanceCount,
        holidays: holidayCount,
        pis: piCount,
        lastUpdated: new Date().toISOString(),
      },
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to get database statistics",
      error: error instanceof Error ? error.message : error,
    };
  }
};

export const disconnectDB = async () => {
  try {
    await prisma.$disconnect();
    console.log("🔌 Database connection closed");
    return {
      success: true,
      message: "Database disconnected successfully",
    };
  } catch (error) {
    console.error("❌ Error disconnecting from database:", error);
    return {
      success: false,
      message: "Failed to disconnect from database",
      error: error instanceof Error ? error.message : error,
    };
  }
};

export default prisma;
