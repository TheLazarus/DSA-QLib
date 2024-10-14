#include <iostream>
#include <vector>

int largestElementInArray(std::vector<int> &arr)
{
    int largest = INT_MIN;

    for (int i = 0; i < arr.size(); i++)
    {
        if (arr[i] > largest)
        {
            largest = arr[i];
        }
    }
    return largest;
}

int main()
{

    std::vector<int> arr{5, 4, 3, 5, 6};

    int largestNumber = largestElementInArray(arr);

    std::cout << "The largest number is " << largestNumber << std::endl;
}