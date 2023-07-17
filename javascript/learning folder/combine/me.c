//gcd
#include<stdio.h>
int gcd(int a,int b);
int main(){


// start 3x3 matrix
int mat[3][3]={{1,2,3},{4,5,6},{7,8,9}};
for (int i = 0; i < 3; i++)
{
  /* code */
  for (int j = 0; j < 3; j++)
  {
    /* code */
  printf("%d  ",mat[i][j]);
  }
  printf("\n");
}
printf("\n \n");  
for (int  i = 0; i < 3; i++)
{
  for (int j =0; j < 3; j++)
  {
    if(j>i){
   int temp= mat[i][j];
   mat[i][j]=mat[j][i];
   mat[j][i]=temp;
    }
  }
  
}
for (int i = 0; i < 3; i++)
{
  /* code */
  for (int j = 0; j < 3; j++)
  {
    /* code */
  printf("%d  ",mat[i][j]);
  }
  printf("\n");
}



return 0;
}

