const char start = '|';
const char ending = '_';
const char mid = ',';

boolean state1 = false;
boolean state2 = false;
boolean state3 = false;
boolean state4 = false;
boolean state5 = false;
boolean state6 = false;

const int led1 = 7;
const int led2 = 6;
const int led3 = 5;
const int led4 = 4;
const int led5 = 3;
const int led6 = 2;

const int threshold = 120;

int val1;
int val2;
int val3;
int val4;
int val5;
int val6;

int i;

void setup()
{
  Serial.begin(9600);
  pinMode(led1, OUTPUT);
  pinMode(led2, OUTPUT);
  pinMode(led3, OUTPUT);
  pinMode(led4, OUTPUT);
  pinMode(led5, OUTPUT);
  pinMode(led6, OUTPUT);
  
}


void loop(){
  val1 = analogRead(A0);
  if(val1 < threshold)
  {
    if(state1 != true)
    {
      state1 = true;
      sendLEDState(1, 1);
      digitalWrite(led1, HIGH);
    }
  }
  else
  {
    if(state1 == true)
    {
      state1 = false;
      sendLEDState(1, 0);
      digitalWrite(led1, LOW);
    }
  }
  //Serial.print("val 1 : ");
  //Serial.println(val1);
  val2 = analogRead(A1);
  if(val2 < threshold)
  {
    if(state2 != true)
    {
      state2 = true;
      sendLEDState(2, 1);
      digitalWrite(led2, HIGH);
    }
  }
  else
  {
    if(state2 == true)
    {
      state2 = false;
      sendLEDState(2, 0);
      digitalWrite(led2, LOW);
    }
  }
  //Serial.print("val 2 : ");
  //Serial.println(val2);
  val3 = analogRead(A2);
  if(val3 < threshold)
  {
    if(state3 != true)
    {
      state3 = true;
      sendLEDState(3, 1);
      digitalWrite(led3, HIGH);
    }
  }
  else
  {
    if(state3 == true)
    {
      state3 = false;
      sendLEDState(3, 0);
      digitalWrite(led3, LOW);
    }
  }
  //Serial.print("val 3 : ");
  //Serial.println(val3);
  val4 = analogRead(A3);
  if(val4 < threshold)
  {
    if(state4 != true)
    {
      state4 = true;
      sendLEDState(4, 1);
      digitalWrite(led4, HIGH);
    }
  }
  else
  {
    if(state4 == true)
    {
      state4 = false;
      sendLEDState(4, 0);
      digitalWrite(led4, LOW);
    }
  }
  //Serial.print("val 4 : ");
  //Serial.println(val4);
  val5 = analogRead(A4);
  if(val5 < threshold)
  {
    if(state5 != true)
    {
      state5 = true;
      sendLEDState(5, 1);
      digitalWrite(led5, HIGH);
    }
  }
  else
  {
    if(state5 == true)
    {
      state5 = false;
      sendLEDState(5, 0);
      digitalWrite(led5, LOW);
    }
  }
  //Serial.print("val 5 : ");
  //Serial.println(val5);
  val6 = analogRead(A5);
  if(val6 < threshold)
  {
    if(state6 != true)
    {
      state6 = true;
      sendLEDState(6, 1);
      digitalWrite(led6, HIGH);
    }
  }
  else
  {
    if(state6 == true)
    {
      state6 = false;
      sendLEDState(6, 0);
      digitalWrite(led6, LOW);
    }
  }
  //Serial.print("val 6; : ");
  //Serial.println(val6);
  delay(200);
}
void dataOnSerial(String str)
{
  int i;
  Serial.print(start);
  for(i = 0; i < str.length(); i++)
  {
    Serial.print(str.charAt(i));
  }
  Serial.print(ending);
}
void sendLEDState(int no, int state)
{
  Serial.print(start);
  Serial.print(no);
  Serial.print(mid);
  Serial.print(state);
  Serial.print(ending);
}
