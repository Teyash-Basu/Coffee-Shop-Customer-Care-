<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
  <html>
  <body>
    <h2>Coffee House Management System</h2>
    <table border="1">
      <tr bgcolor="#9acd32">
      	<!-- <th>ID</th> -->
        <th>NAME</th>
        <th>PHONE_NO</th>
        <th>USERNAME</th>
        <th>TOTAL_AMOUNT</th>
        <th>PAYMENT_TYPE</th>
        <th>Designation</th>
        <th>Promotion</th>
        <!-- <th>Promotion</th> -->
      </tr>
      <xsl:for-each select="CoffeeHouse/Customer">
      <tr>
      	<!-- <td><xsl:value-of select="ID"/></td> -->
        <td><xsl:value-of select="Name"/></td>
        <td><xsl:value-of select="Phonenum"/></td>
        <td><xsl:value-of select="Emailid"/></td>
        <td><xsl:value-of select="Username"/></td>
        <td><xsl:value-of select="Total-Amount"/></td>
        <td><xsl:value-of select="Payment-Type"/></td>
        <!-- <td><xsl:value-of select="Promotion"/></td> -->
      </tr>
      </xsl:for-each>
    </table>
  </body>
  </html>
</xsl:template>
</xsl:stylesheet>

