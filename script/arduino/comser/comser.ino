
void setup() {
  Serial.begin(9600);
}
String data = "Bonjour";
char start = '|';
char ending = '_';
void loop() {
  printString(data);
  delay(5000);
}
void printString(String str)
{
  int i;
  Serial.print(start);
  for(i = 0; i < str.length(); i++)
  {
    Serial.print(str.charAt(i));
  }
  Serial.print(ending);
}

